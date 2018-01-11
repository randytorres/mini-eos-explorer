import React, { Component } from 'react';
import Eos from 'eosjs';

const EOS_LOGO = "https://d340lr3764rrcr.cloudfront.net/Images/EOS_spinning_logo.gif";

let eos = Eos.Localnet()

class EosTextParagraphComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latestBlock: {}
    }
  }

  componentDidMount() {
    this._getLatestBlock();
  }

  _handleBtnClick = () => {
    this._getLatestBlock();
  }

  _getLatestBlock = () => {
    eos.getInfo({}).then(info => 
      eos.getBlock(info.head_block_num)
      .then(latestBlock => this.setState({ latestBlock })
    ));
  }

  _serialize = text => {
    const pattern = /_/ig;
    return text.replace(pattern, ' ');
  }

  _renderRows = () => (
    <div className="container">
      {Object.keys(this.state.latestBlock).map(field => 
        <p className="block-text" key={field}>
          <b>{`${this._serialize(field)}:`}</b>
          <span>{`${this.state.latestBlock[field]}`}</span>
        </p>
      )}
    </div>
  )

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={EOS_LOGO} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to Mini EOS Block Explorer</h1>
        </header>

        <div>
          <h4>Latest Block:</h4>
          {this.state.latestBlock ? this._renderRows() : null}
          <button className="btn" onClick={this._handleBtnClick}>Get New Block</button>
        </div>
      </div>
    );
  }
}
  
export default EosTextParagraphComponent;
