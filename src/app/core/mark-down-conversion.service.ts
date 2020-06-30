import { Injectable } from '@angular/core';
import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import * as  hljs from 'highlight.js'; // https://highlightjs.org/

@Injectable({
  providedIn: 'root'
})
export class MarkDownConversionService {

  constructor() { }


  renderMarkdown(markdown) {
    const md = new Remarkable('full', {
      html: true,        // Enable HTML tags in source
      xhtmlOut: true,        // Use '/' to close single tags (<br />)
      breaks: true,        // Convert '\n' in paragraphs into <br>
      langPrefix: 'language-',  // CSS language prefix for fenced blocks
      linkify: true,         // autoconvert URL-like texts to links
      linkTarget: '',           // set target to open link in

      // Enable some language-neutral replacements + quotes beautification
      typographer: true,

      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
      quotes: '“”‘’',

      // Highlighter function. Should return escaped HTML,
      // or '' if input not changed
      highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) { }
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch (__) { }

        return ''; // use external default escaping
      }
    }).use(linkify);

    const readMeContent = md.render(markdown);
    return readMeContent;

  }
}
