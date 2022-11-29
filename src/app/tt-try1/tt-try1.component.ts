import { Component } from '@angular/core';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';


@Component({
  selector: 'app-tt-try1',
  templateUrl: './tt-try1.component.html',
  styleUrls: ['./tt-try1.component.scss']
})
export class TtTry1Component {

  editor = new Editor({ extensions: [StarterKit] });
  value = '<p>Hello, Tiptap!</p>'; // can be HTML or JSON, see https://www.tiptap.dev/api/editor#content

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
