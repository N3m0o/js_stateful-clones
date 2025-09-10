'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const copy = [];
  let current = { ...state };

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'addProperties') {
      current = { ...current, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      current = { ...current };

      for (const key of action.keysToRemove) {
        delete current[key];
      }
    }

    if (action.type === 'clear') {
      current = {};
    }
    copy.push(current);
  }

  return copy;
}

module.exports = transformStateWithClones;
