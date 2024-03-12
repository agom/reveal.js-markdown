import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

let deck = new Reveal({
   plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
})
deck.initialize({
    controls: false,
    hash: true,
    markdown: { smartypants: true },
    scrollProgress: true,
});
