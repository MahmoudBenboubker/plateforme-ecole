/**
 *
 * Asynchronously loads the component for NiveauPaper
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
