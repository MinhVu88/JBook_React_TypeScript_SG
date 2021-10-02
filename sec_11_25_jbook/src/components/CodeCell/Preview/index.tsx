import React, { useRef, useEffect } from 'react';
import './preview.css';

interface CodePreviewProps {
  bundledCode: string;
};

const iframeOriginalContents = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          // listen for the "message" event from the parent frame (user input in CodeEditor)
          window.addEventListener(
            'message',
            event => {
              try{
                const transpiredBundledOutput = event.data;

                console.log("CodePreview | window.addEventListener() | event.data ->", transpiredBundledOutput);
              
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

export const Preview: React.FC<CodePreviewProps> = ({ bundledCode }) => {
  const iframeRef = useRef<any>();

  useEffect(() => {
    // reset iframe's contents back to its original srcdoc whenever the bundled code's updated
    iframeRef.current.srcdoc = iframeOriginalContents;

    setTimeout(() => {
      iframeRef.current.contentWindow.postMessage(bundledCode, '*');

      console.log('\nCodePreview | useEffect | iframeRef.current ->',iframeRef.current);
    }, 50);
  }, [bundledCode]);

  return (
    <div className='preview-wrapper'>
      <iframe
        title="codePreview" 
        sandbox="allow-scripts" 
        srcDoc={iframeOriginalContents} 
        ref={iframeRef}
      />
    </div>
  );
};
