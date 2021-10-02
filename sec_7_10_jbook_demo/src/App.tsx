import React, {useState, useEffect, useRef} from 'react';
import * as esbuild from 'esbuild-wasm';
import { unpkgPaths, unpkgFiles } from './plugins/index';

function App(): JSX.Element {
  const [input, setInput] = useState('');
  // const [output, setOutput] = useState('');

  const esbuildServiceRef = useRef<any>();
  const iframeRef = useRef<any>();

  const startService = async() => {
    console.log('App.tsx | startService | esbuildServiceRef.current 1 ->',esbuildServiceRef.current);

    esbuildServiceRef.current = await esbuild.startService({
      worker: true,      
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    });

    console.log('App.tsx | startService | esbuildServiceRef.current 2 ->',esbuildServiceRef.current);
  };

  const handleBtnClick = async() => {
    if(!esbuildServiceRef.current) {
      return;
    }

    console.log('\nApp.tsx | handleBtnClick | esbuildServiceRef.current ->',esbuildServiceRef.current);

    // reset iframe's contents back to its original srcdoc before the bundling process starts
    iframeRef.current.srcdoc = iframeOriginalContents;

    // esbuild's Transform API
    // const result = await ref.current.transform(
    //   input,
    //   {loader: 'jsx', target: 'es2015'}
    // );
    // console.log('\nApp.tsx | ref.current.transform() ->',result);
    // setOutput(result.code);

    // esbuild's Build API
    const result = await esbuildServiceRef.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [
        unpkgPaths(), 
        unpkgFiles(input)
      ],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window'
      }
    });

    console.log('\nApp.tsx | handleBtnClick | esbuildServiceRef.current.build() ->',result);

    const transpiredBundledOutput = result.outputFiles[0].text;

    // setOutput(transpiredBundledOutput);

    // try {
    //   eval(transpiredBundledCode);
    // } catch (error) {
    //   alert(error);      
    // }

    /* 
    contentWindow:

      - https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow

      - https://www.w3schools.com/jsref/prop_frame_contentwindow.asp

      - https://www.geeksforgeeks.org/html-dom-iframe-contentwindow-property/

      - http://help.dottoro.com/ljctglqj.php

    postMessage:

      - https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

      - https://stackoverflow.com/questions/3457391/how-do-you-use-window-postmessage-across-domains

      - https://stackoverflow.com/questions/61548354/how-to-postmessage-into-iframe

      - https://scriptverse.academy/tutorials/html5-window-postmessage.html
    */
    iframeRef.current.contentWindow.postMessage(transpiredBundledOutput, '*');

    console.log('\nApp.tsx | handleBtnClick | iframeRef.current ->',iframeRef.current);
  };

  useEffect(() => {
    startService();
  }, []);

  const iframeOriginalContents = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          // listen for the "message" event from the parent frame (user-provided code in textarea)
          window.addEventListener(
            'message',
            event => {
              try{
                const transpiredBundledOutput = event.data;

                console.log("App.tsx | window.addEventListener() | event.data ->", transpiredBundledOutput);
              
                eval(transpiredBundledOutput);
              }catch(error) {
                const root = document.querySelector('#root');

                root.innerHTML = '<div style="color: red;"><h4>Runtime Error: </h4>' + error + '</div>';

                console.error(error);
              }
            },
            false
          );
        </script>
      </body>
    </html>
  `;

  return (
    <div className="App">
      <div style={{textAlign: 'center'}}>
        <h1>
          [ jbook Demo ]<br></br>
          Sec 7 - Implementing in-browser Bundling.<br></br>
          Sec 8 - Dynamic Fetching & Loading of NPM Modules.<br></br>
          Sec 9 - Caching for Big Performance Gains.<br></br>
          Sec 10 - Safely Handling Untrusted Code Execution.
        </h1>
        <textarea
          style={{width: '700px', height: '250px'}} 
          value={input} 
          onChange={e => setInput(e.target.value)}
        ></textarea>
        <div>
          <button 
            style={{
              marginTop: '30px', 
              width: '150px', 
              height: '40px', 
              cursor: 'pointer', 
              fontWeight: 'bolder'
            }} 
            onClick={handleBtnClick}
          >
            Submit
          </button>
        </div>
      </div>
      {/* <pre>{output}</pre> */}
      <div 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '30px'
        }}
      >
        <iframe
          style={{
            width: '700px', 
            height: '250px', 
            borderColor: 'crimson'
          }}
          title="codePreview" 
          sandbox="allow-scripts" 
          srcDoc={iframeOriginalContents} 
          ref={iframeRef}
        />
      </div>
    </div>
  );
}

export default App;
