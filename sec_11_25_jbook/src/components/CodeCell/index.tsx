import { useState, useEffect } from 'react';
import { Editor } from './Editor';
import { Preview } from './Preview';
import { startService } from '../../bundler/esbuild/index';
import { Resizable } from '../Resizable';

export const CodeCell = (): JSX.Element => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const timer = setTimeout(async() => {
      const transpiredBundledOutput = await startService(input);

      setOutput(transpiredBundledOutput);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction='vertical'>
      <div style={{display: 'flex', flexDirection: 'row', height: '100%'}}>
        <Resizable direction='horizontal'>
          <Editor 
            initialValue=''
            onChange={value => setInput(value)}
          />
        </Resizable>
        <Preview bundledCode={output}/>
      </div>
    </Resizable>
  );
};
