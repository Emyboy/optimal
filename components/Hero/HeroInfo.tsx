import React from 'react'

export default function HeroInfo() {
  return (
      <section className="section store-features style4 pt-0 mt-4">
          <div className="container">
              <div className="row store-info">
                  <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex flex-column align-items-center text-center mb-3 mb-md-0">
                      <i className="an an-chat"></i>
                      <div className="detail">
                          <h4 className="body-font fw-600 mb-2">SUPPORT 24/7</h4>
                          <p>We support online 24/7 on day</p>
                      </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex flex-column align-items-center text-center mb-3 mb-md-0">
                      <i className="an an-share"></i>
                      <div className="detail">
                          <h4 className="body-font fw-600 mb-2">30 DAYS RETURN</h4>
                          <p>Return it within 24 days of purchase</p>
                      </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex flex-column align-items-center text-center">
                      <i className="an an-ship-fast"></i>
                      <div className="detail">
                          <h4 className="body-font fw-600 mb-2">FREE SHIPPING</h4>
                          <p>Free shipping on all US orders</p>
                      </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex flex-column align-items-center text-center">
                      <i className="an an-badge-dollar"></i>
                      <div className="detail">
                          <h4 className="body-font fw-600 mb-2">MONEY GUARANTEE</h4>
                          <p>30 days money back guarantee</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
