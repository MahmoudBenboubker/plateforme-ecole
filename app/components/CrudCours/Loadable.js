/**
 *
 * Asynchronously loads the component for CrudCours
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
