import React from 'react';
import PropType from 'prop-types';
import SomeCode from './SomeCode.jsx';

// class Modal extends React.Component {

const Modal = ({
  title,
  ghLink,
  codeSnippet,
  codeLang,
}) =>
  (
    <div className="modal">
      <div className="code-container">
        <div
          className="code-block"
          onClick={(e) => { e.stopPropagation(); }}
          role="presentation"
        >
          <h2 className="code-title">{title}
            <span className="gh-link">
              <a href={ghLink}>
                <i className="fa fa-github fa-2" aria-hidden="true" />&nbsp;View this code on Github
              </a>
            </span>
          </h2>
          <SomeCode
            codeSnippet={codeSnippet}
            codeLang={codeLang}
          />
        </div>
      </div>
    </div>
  );

module.exports = Modal;

Modal.propTypes = {
  title: PropType.string.isRequired,
  ghLink: PropType.string.isRequired,
  codeSnippet: PropType.string.isRequired,
  codeLang: PropType.string.isRequired,
};
