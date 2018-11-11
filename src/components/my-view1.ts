/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import '@vaadin/vaadin-split-layout/vaadin-split-layout.js';
import '@vaadin/vaadin-designer-viewport/vaadin-designer-viewport.js';
import '@vaadin/vaadin-designer-paper/vaadin-designer-paper.js';
import '@vaadin/vaadin-designer-palette/vaadin-designer-palette.js';
//import '@vaadin/vaadin-designer-license-dialog/vaadin-designer-license-dialog.js';
import '@vaadin/vaadin-dnd/vaadin-dnd.js';
import '@vaadin/vaadin-designer-outline/vaadin-designer-outline.js';
import '@vaadin/vaadin-designer-properties/vaadin-designer-properties.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView1 extends PageViewElement {
  protected render() {
    return html`
      ${SharedStyles}

        <!-- <vaadin-designer-license-dialog license-state="[[_licenseState]]" validation-url="[[_licenseValidationUrl]]"></vaadin-designer-license-dialog> -->

        <vaadin-split-layout id="split-layout-container">
          <vaadin-designer-viewport id="viewport" content-width="{{paperWidth}}" content-height="{{paperHeight}}"
            editable-element="[[editableElementTag]]">
            <vaadin-designer-paper id="paper" selected="{{selected}}" mode="[[mode]]" element-resolver="[[resolver]]" iframe>
              <vaadin-dnd id="vaadinDnd" editable-element="[[editableElementTag]]" broadcaster="[[dndBroadcaster]]"
                internal-id-name="[[designerSourceId]]" enable-dnd="[[isEditMode]]">
                <iframe id="design-element-wrapper"></iframe>
              </vaadin-dnd>
            </vaadin-designer-paper>
          </vaadin-designer-viewport>

          <vaadin-split-layout id="components-wrapper">
            <vaadin-designer-palette id="palette" web-component-imports="[[webComponentImports]]"></vaadin-designer-palette>

            <vaadin-split-layout orientation="vertical">
              <vaadin-designer-outline id="outline" items="[[outlineItems]]" selected-id="[[outlineSelectedId]]"
                selection-changed-callback="[[_boundOutlineSelectionChangedCallback]]"></vaadin-designer-outline>
              <vaadin-designer-properties id="properties" items="[[propertiesItems]]"></vaadin-designer-properties>
            </vaadin-split-layout>
          </vaadin-split-layout>
        </vaadin-split-layout>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
