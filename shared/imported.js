/* eslint-disable */
    /* tslint:disable */
     
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      0: () => import('../client/pages/index'),
1: () => import('../client/pages/about'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;