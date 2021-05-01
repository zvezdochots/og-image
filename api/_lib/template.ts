
import { readFileSync } from 'fs';
import marked from 'marked';
import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';
const twemoji = require('twemoji');
const twOptions = { folder: 'svg', ext: '.svg' };
const emojify = (text: string) => twemoji.parse(text, twOptions);

const rglr = readFileSync(`${__dirname}/../_fonts/notosans-bold-webfont.woff2`).toString('base64');
const bold = readFileSync(`${__dirname}/../_fonts/notosans-bold-webfont.woff2`).toString('base64');
const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString('base64');

function getCss(theme: string, fontSize: string) {
    let background = '#F5F1E3';
    let foreground = 'black';
    let radial = 'lightgray';

    if (theme === 'dark') {
        background = 'black';
        foreground = 'white';
        radial = 'dimgray';
    }
    return `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    @font-face {
        font-family: 'Vera';
        font-style: normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${mono})  format("woff2");
      }

    body {
        background: ${background};
        background-image: radial-gradient(circle at 25px 25px, ${radial} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${radial} 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        text-align: left;
        align-items: flex-start;
        justify-content: flex-start;
    }

    code {
        color: #D400FF;
        font-family: 'Vera';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }

    .logo-wrapper {
        display: flex;
        align-items: flex-strart;
        align-content: flex-start;
        justify-content: flex-start;
        justify-items: flex-start;
    }

    .logo {
        margin: 0 75px;
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }

    .spacer {
        margin: 150px 80px 0;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }
    
    .heading {
        font-family: 'Inter', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        color: ${foreground};
        line-height: 1.5;
    }`;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { text, theme, md, fontSize, images, widths, heights } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
        <div>
            <div class="spacer">
            <div class="logo-wrapper">
                <svg width="330" height="100" viewBox="0 0 330 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M122.55 56.6992H130.79V76.1264L139.742 68.5934V30.3734L142.356 27.7567V72.1617L129.126 82.7079H143.624V56.6992L154.081 56.5406V82.7079H162.875L167.707 74.0648H162.716V28.4703L150.833 17.2898L131.106 37.4306V47.7389L122.55 56.6992ZM122.709 17.3691L134.275 28.2325L145.208 17.3691H122.709ZM154.398 48.0561H143.624V26.4087L145.683 24.4263L154.398 32.4351V48.0561Z" fill="black"/>
<path d="M170.48 82.7077H179.274L183.948 74.3818H179.036V47.8181L184.106 43.4569V55.9062L191.949 49.2454V35.2896L179.036 46.1529V35.6067L170.48 44.0913V82.7077Z" fill="black"/>
<path d="M196.148 82.7079H206.368L212.23 74.6991H204.704V43.6949L213.418 35.369H204.704V22.6025L196.148 30.2941V82.7079Z" fill="black"/>
<path d="M218.568 77.7917L229.342 71.2895L245.821 17.3691H223.321L220.311 27.5189H233.7L228.233 45.3601H221.975L219.36 53.2896H225.777L218.568 77.7917ZM217.3 82.7079H244.949L247.96 74.0648H232.432L238.928 53.2103H245.662L248.197 45.6773H241.305L250.019 17.3691H248.673L231.085 73.9855L217.3 82.7079Z" fill="black"/>
<path d="M253.822 34.9725L262.378 27.6774V17.3691L253.822 25.14V34.9725ZM262.378 74.1441V35.369L253.822 42.9813V82.7079H262.219L267.923 74.1441H262.378Z" fill="black"/>
<path d="M270.776 82.7078H279.332V47.8182L284.956 42.5847L288.68 46.3116V82.7078H297.157L301.593 74.3026H296.919V42.2675L290.74 35.3689L279.332 46.0737V35.4482L270.776 43.9327V82.7078Z" fill="black"/>
<path d="M304.524 82.7079H317.992L325.281 74.382H313.239V67.0869L329.004 49.7213L316.408 35.5276L304.524 46.7874V82.7079ZM322.112 55.5098L313.239 65.2631V41.6333L322.112 55.5098Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.9089 50C99.9089 22.4043 77.525 0 49.9545 0C22.3839 0 0 22.4043 0 50C0 77.5957 22.3839 100 49.9545 100C77.525 100 99.9089 77.5957 99.9089 50Z" fill="#8A817C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.2444 25.6036L74.2097 34.5754C75.4137 35.7231 76.1138 37.3012 76.1567 38.9645C76.1997 40.6278 75.5819 42.2403 74.4388 43.4485L44.9902 72.9176C43.9236 73.9758 42.5257 74.6348 41.0313 74.784L27.3867 76.0282H27.0921C26.6616 76.0305 26.2347 75.9481 25.8362 75.7852C25.4373 75.6223 25.0748 75.3821 24.7692 75.0786C24.4281 74.7387 24.1662 74.3278 24.0023 73.875C23.8384 73.4219 23.776 72.9387 23.8201 72.459L25.227 58.8051C25.3761 57.3094 26.0345 55.9106 27.0921 54.8434L56.5406 25.3743C57.7669 24.3375 59.3315 23.7883 60.9362 23.8305C62.541 23.8727 64.0744 24.5039 65.2444 25.6036ZM69.6053 39.1496C69.5698 39.7129 69.3235 40.2434 68.9145 40.6352L58.6941 50.8649C58.5716 50.986 58.4198 51.0727 58.2539 51.1168C58.0877 51.161 57.9132 51.161 57.7473 51.1168C57.5807 51.0723 57.4285 50.9844 57.3063 50.8625C57.1846 50.7403 57.0968 50.5879 57.0523 50.4211L55.348 44.2387L49.4143 42.7621C49.2449 42.7227 49.0888 42.6387 48.9624 42.5192C48.8434 42.3993 48.7575 42.2504 48.7126 42.0875C48.6658 41.9196 48.6642 41.7422 48.7083 41.5731C48.7528 41.4043 48.841 41.25 48.9639 41.1262L59.1847 30.8965C59.5785 30.484 60.1132 30.2371 60.6802 30.2043L60.6962 30.1875L60.711 30.2028C60.7216 30.2024 60.7325 30.202 60.7431 30.2016C61.3331 30.184 61.9057 30.3996 62.3369 30.802L69.0086 37.4801C69.4109 37.9118 69.6264 38.4848 69.6088 39.0754C69.6084 39.0852 69.608 39.0954 69.6076 39.1051L69.6291 39.1266L69.6053 39.1496Z" fill="white"/>
</svg>

            </div>
            <div class="spacer">
            <div class="heading">${emojify(
                md ? marked(text) : sanitizeHtml(text)
            )}
            </div>
        </div>
    </body>
</html>`;
}

function getImage(src: string, width ='auto', height = '225') {
    return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`
}

function getPlusSign(i: number) {
    return i === 0 ? '' : '<div class="plus">+</div>';
}
