import builder from '@/VueBuilder/builder';

export default function useBuilder() {

  const rootContainer = document.getElementById('elizaRightPanelsContainer') || document.body;

  const createPanel = (appName, appParams, container = null) => {
    let appContainer = container;


    if ( !appContainer ) {
      appContainer = document.createElement('div');
      appContainer.setAttribute('data-name', appName);

      for ( const appParam in appParams ) {
        appContainer.setAttribute(`data-${ appParam }`, appParams[appParam]);
      }

      rootContainer.append(appContainer);
    }

    const panel = builder.init(appContainer);

    return panel;
  };

  /**
   * up app with uid === panelUid up to DOM (display first)
   * @param panelUid
   */
  const upPanel = (panelUid) => {

    const lastPanel = rootContainer.lastChild;

    const app = builder.getAppByUid(panelUid);

    const container = app?.app?.element;

    if ( lastPanel && container ) {

      lastPanel.after(container);

      // show panel if it was hided
      container.style.display = '';

    }
  };

  /**
   * hide all panels in DOM
   */
  const hideAllPanels = () => {

    for ( const appContainer of rootContainer.children ) {
      if ( appContainer.classList.contains('vue_builder_application') ) {
        appContainer.style.display = 'none';
      }
    }

  };

  const hidePanel = (panelUid) => {

    const app = builder.getAppByUid(panelUid);

    const container = app?.app?.element;

    if ( container ) {
      container.style.display = 'none';
    }

  };

  const emit = (eventName, payload) => {
    builder.emit(eventName, payload);
  };


  return { builder, createPanel, hidePanel, hideAllPanels, upPanel, emit };
}