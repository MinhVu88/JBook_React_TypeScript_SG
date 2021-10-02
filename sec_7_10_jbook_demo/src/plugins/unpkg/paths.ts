import * as esbuild from 'esbuild-wasm';

// the plugin's functionality is explained in sec 7/vid 68
export const unpkgPaths = () => {
  return {
    name: 'unpkg-paths-plugin',
    setup(build: esbuild.PluginBuild) {
      // APPROACH 1: build.onResolve
      // build.onResolve(
      //   { filter: /.*/ }, 
      //   async (args: any) => {
      //     console.log('\nunpkg | paths.ts | onResolve | args ->', args);

      //     if(args.path === 'index.js') {
      //       return { path: args.path, namespace: 'a' };
      //     }
      //     // else if(args.path === 'tiny-test-pkg') {
      //     //   return {
      //     //     path: 'https://unpkg.com/tiny-test-pkg@1.0.0/index.js',
      //     //     namespace: 'a'
      //     //   };
      //     // }

      //     // args.path in this case could be, for example, './utils' or '../utils'
      //     if(args.path.includes('./') || args.path.includes('../')) {
      //       // const baseDomain = args.importer + '/';
      //       const baseDomain = `https://unpkg.com${args.resolveDir}/`;

      //       return {
      //         path: new URL(args.path, baseDomain).href,
      //         namespace: 'a'
      //       };
      //     }

      //     return {
      //       path: `https://unpkg.com/${args.path}`,
      //       namespace: 'a'
      //     };
      //   }
      // );

      // APPROACH 2: build.onResolve
      // handle "index.js" (the entry-point file specified in App.tsx)
      build.onResolve(
        { filter: /(^index\.js$)/ },
        (args: any) => {
          console.log('\nunpkg | paths.ts | onResolve | args ->', args);

          return { path: 'index.js', namespace: 'a' };
        }
      );

      // handle relative paths in a module (for example: './utils' or '../utils')
      build.onResolve(
        { filter: /^\.+\// },
        async (args: any) => {
          console.log('\nunpkg | paths.ts | onResolve | args ->', args);

          // const baseDomain = args.importer + '/';
          const baseDomain = `https://unpkg.com${args.resolveDir}/`;

          return {
            path: new URL(args.path, baseDomain).href,
            namespace: 'a'
          };
        }
      );

      // handle a module's main file
      build.onResolve(
        { filter: /.*/ },
        async (args: any) => {
          console.log('\nunpkg | paths.ts | onResolve | args ->', args);

          return {
            path: `https://unpkg.com/${args.path}`,
            namespace: 'a'
          };
        }
      );
    }
  };
};