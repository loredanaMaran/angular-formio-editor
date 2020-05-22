import { JsonEditorOptions } from './json-editor/json-editor-options';

export type FormioEditorTab = 'builder' | 'json' | 'renderer';

export interface FormioEditorOptions {
  tab?: FormioEditorTab;
  tabs?: FormioEditorTab[];
  builder?: BuilderOptions;
  json?: JsonEditorOptions;
}

export interface BuilderOptions {
  hideDisplaySelect?: boolean;
}