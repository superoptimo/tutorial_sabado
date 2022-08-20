import sveltePreprocess from 'svelte-preprocess'

// include markdown preprocessor
import { mdsvex } from 'mdsvex';
 
export default {
 extensions: ['.md', '.svelte'], // markdown files
 // Consult https://github.com/sveltejs/svelte-preprocess
 // for more information about preprocessors
 preprocess: [
   mdsvex({ extension: 'md' }), // markdown preprocessor
   sveltePreprocess()
 ]
}
