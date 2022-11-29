import { Component } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

import * as Y from 'yjs'
import { WebrtcProvider } from 'y-webrtc'
import {Collaboration} from "@tiptap/extension-collaboration";
import {CollaborationCursor} from "@tiptap/extension-collaboration-cursor";


@Component({
  selector: 'app-tt-try1',
  templateUrl: './tt-try1.component.html',
  styleUrls: ['./tt-try1.component.scss']
})
export class TtTry1Component {
// A new Y document
  ydoc = new Y.Doc()
// Registered with a WebRTC provider
  provider = new WebrtcProvider('example-document', this.ydoc)
  editor = new Editor({ extensions: [
    StarterKit.configure({ history: false}),
      Collaboration.configure({ document: this.ydoc}),
      CollaborationCursor.configure({
        provider: this.provider,
        user: { name: 'Alice', color: 'red' }
      })
  ] });
  value = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
