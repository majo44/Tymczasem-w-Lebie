import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
const  deck = new Reveal({
    plugins: [ RevealHighlight ]
})
deck.initialize({
    history: true
});
