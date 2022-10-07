import React from 'react'

function Deposit() {
  return (
    <div className='flex flex-col bg-blue-100 h-screen items-center justify-center'>
      <div className='text-[20px] font-[grotesk] font-[700]'>Deposit</div>
      <div className='mt-[20px] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-[15px] font-[grotesk] font-[700]'>Deposit Amount</div>
          <div className='mt-[10px] flex items-center justify-center'>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>-</div>
            </div>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>+</div>
            </div>
          </div>
        </div>
        <div className='mt-[20px] flex flex-col items-center justify-center'>
          <div className='text-[15px] font-[grotesk] font-[700]'>Payment Method</div>
          <div className='mt-[10px] flex items-center justify-center'>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>-</div>
            </div>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'> 
              <div className='text-[20px] font-[grotesk] font-[700]'>+</div>
            </div>
          </div>
        </div>
        <div className='mt-[20px] flex flex-col items-center justify-center'>
          <div className='text-[15px] font-[grotesk] font-[700]'>Total</div>
          <div className='mt-[10px] flex items-center justify-center'>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>-</div>
            </div>
            <div className='bg-[#F5F5F5] h-[40px] w-[40px] flex items-center justify-center'>
              <div className='text-[20px] font-[grotesk] font-[700]'>+</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex m-auto title align-items-center">
            <div className="col-8 text-start">
              <p className="m-0 withdraw">Withdraw</p>
            </div>
            <div className="col-4 text-end">
              <img className="img-fluid3" src={avatar}/>
            </div>
          </div>
          <div className="container">
            <div className="row px-4">
              <div className="col-12 p-4">
                <p className="select-method">Select withdrawal method</p>
              </div>
            </div>
            <div className="row box">
              <div className="col-12 currency-box">
                <div class="d-flex list-group my-list-group m-auto">
                  <a href="/withdrawal-bitcoin" class="list-group-item list-group-item-action form-select">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="d-flex col-2 padding-left align-items-center">
                            <img src={btc} className="img-fluid"></img>
                          </div>
                          <div className="col-8  my-form-select p-0 text-center text-md-start currency-text">
                            <p className="m-0">
                              Bitcoin
                            </p>
                            <p className="m-0">
                              $57,155.40 <span className="success">+2.34%</span>
                            </p>
                          </div>
                          <div className="d-flex col-2 padding-left align-items-center">
                            <img className="logo" src={logo}></img>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action form-select">
                      <div className="container-fluid">
                        <div className="row">
                        <div className="d-flex col-2 padding-left align-items-center">
                            <img src={ethereum} className="img-fluid"></img>
                          </div>
                          <div className="col-8  my-form-select p-0 text-center text-md-start currency-text">
                            <p className="m-0">
                              Ethereum
                            </p>
                            <p className="m-0">
                              $57,155.40 <span className="success">+2.34%</span>
                            </p>
                          </div>
                          <div className="d-flex col-2 padding-left align-items-center">
                            <img className="logo" src={logo}></img>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action form-select">
                      <div className="container-fluid">
                        <div className="row">
                        <div className="d-flex col-2 padding-left align-items-center">
                            <img src={dogecoin} className="img-fluid"></img>
                          </div>
                          <div className="col-8  my-form-select p-0 text-center text-md-start currency-text">
                            <p className="m-0">
                              Dogecoin
                            </p>
                            <p className="m-0">
                              $57,155.40 <span className="success">+2.34%</span>
                            </p>
                          </div>
                          <div className="d-flex col-2 padding-left align-items-center">
                            <img className="logo" src={logo}></img>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action form-select">
                      <div className="container-fluid">
                        <div className="row">
                        <div className="d-flex col-2 padding-left align-items-center">
                            <img src={litecoin} className="img-fluid"></img>
                          </div>
                          <div className="col-8  my-form-select p-0 text-center text-md-start currency-text">
                            <p className="m-0">
                              Litecoin
                            </p>
                            <p className="m-0">
                              $57,155.40 <span className="success">+2.34%</span>
                            </p>
                          </div>
                          <div className="d-flex col-2 padding-left align-items-center">
                            <img className="logo" src={logo}></img>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action form-select">
                      <div className="container-fluid">
                        <div className="row">
                        <div className="d-flex col-2 padding-left align-items-center">
                            <img src={bnb} className="img-fluid"></img>
                          </div>
                          <div className="col-8  my-form-select p-0 text-center text-md-start currency-text">
                            <p className="m-0">
                              BNB
                            </p>
                            <p className="m-0">
                              $57,155.40 <span className="success">+2.34%</span>
                            </p>
                          </div>
                          <div className="d-flex col-2 padding-left align-items-center">
                            <img className="logo" src={logo}></img>
                          </div>
                        </div>
                      </div>
                    </a>
                </div>
              </div>
            </div>
          </div>
    </div>
    
  )
}

export default Deposit