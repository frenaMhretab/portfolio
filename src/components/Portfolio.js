import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
              <>
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href="https://frenamhretab.github.io/CS315/d44Project/Project/product.html">
                        <img src={`${item.imgurl}`} className="item-img" alt={item.name} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

              
              </>
              )
            })
              }

              {/*  */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://frenamhretab.github.io/CS315/d44Project/Project/product.html">
                    <img src="images/amazon.png" className="item-img" alt="Amazon" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Amazon</h5>
                        <p>Application</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <h1>Architecture diagram </h1>
            <div style={{ paddingLeft: '240px' }}> <img src="images/portfolio/aws.jpg"  alt= "Architecture"/></div>
        </div>
      </div>
  </section>
        );
  }
}