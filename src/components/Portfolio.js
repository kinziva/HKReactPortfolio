import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out My Portfolio.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                      {/* portfolio urls */}
                      <div className="card-footer text-center">
                        <ul>
                          <li>
                            <a href={item.deployed} target="_blank" rel="noreferrer noopener"
                              className="btn">    <i class="text-left fa fa-external-link" aria-hidden="true">App </i></a>
                            <a href={item.github} target="_blank" rel="noreferrer noopener"
                              className="btn"> <i class="fa fa-github" aria-hidden="true">Code</i></a>
                          </li>
                          <li>

                          </li>
                        </ul>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}