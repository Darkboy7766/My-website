import React from 'react'
import { assets } from '../assets/assets'
import TitleH3 from './TitleH3'

const PriceCard1 = () => {
  return (
    <><div className="pt-5 bg-gray-50 overflow-hidden">
          <TitleH3 title="Цени за двигатели MPI" subTitle="Газови уредби за автомобили с индиректно впръскване (MPI)" />
          <div className="flex items-center justify-center flex-wrap gap-8 w-full">
              <div className="border border-blue-500/20 text-sm text-gray-500 flex flex-col items-center w-90 rounded-lg">
                  <div className="flex items-center justify-between w-full px-4 py-2">
                      <div className="flex items-center justify-between gap-4">
                          <div className="bg-white p-1.5 rounded border border-gray-500/30">
                              <img className="h-9" src={assets.brc_logo} alt="dummyFavicon" />
                          </div>
                          <p className="text-lg text-indigo-500  font-semibold ml-20">BRC</p>
                      </div>
                 </div>
                  <div className="flex flex-col items-center gap-3.5 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-blue-500/20">
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>4 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                      <div className="w-full h-px bg-gray-300/60"></div>
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>6 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                      <div className="w-full h-px bg-gray-300/60"></div>
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>8 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                  </div>
              </div>

              <div className="border border-blue-500/20 text-sm text-gray-500 flex flex-col items-center w-90 rounded-lg">
                  <div className="flex items-center justify-between w-full px-4 py-2">
                      <div className="flex items-center justify-between gap-4">
                          <div className="bg-white p-1.5 rounded border border-gray-500/30">
                              <img className="h-9" src={assets.prins_logo_90} alt="dummyFavicon" />
                          </div>
                          <p className="text-lg text-indigo-500  font-semibold ml-20">PRINS</p>
                      </div>

                  </div>
                  <div className="flex flex-col items-center gap-3.5 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-blue-500/20">
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>4 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                      <div className="w-full h-px bg-gray-300/60"></div>
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>6 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                      <div className="w-full h-px bg-gray-300/60"></div>
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>8 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                  </div>
              </div>
              <div className="border border-blue-500/20 text-sm text-gray-500 flex flex-col items-center w-90 rounded-lg">
                  <div className="flex items-center justify-between w-full px-4 py-2">
                      <div className="flex items-center justify-between gap-4">
                          <div className="bg-white p-1.5 rounded border border-gray-500/30">
                              <img className="h-9" src={assets.aeb_logo_90} alt="dummyFavicon" />
                          </div>
                          <p className="text-lg text-indigo-500  font-semibold ml-20">AEB</p>
                      </div>

                  </div>
                  <div className="flex flex-col items-center gap-3.5 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-blue-500/20">
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>4 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                      <div className="w-full h-px bg-gray-300/60"></div>
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>6 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                      <div className="w-full h-px bg-gray-300/60"></div>
                      <div className="flex items-center w-full justify-between text-lg">
                          <p className='font-bold ml-5'>8 цил.</p>
                          <p className='mr-10'>1900</p>
                      </div>
                  </div>
              </div>
          </div>
      </div><div className='py-16 bg-gray-50 overflow-hidden'>
              <TitleH3 title="Цени за двигатели FSI, TFSI, TSI, GDI, DI" subTitle="Газови уредби за автомобили с директно впръскване (FSI, TFSI, TSI, GDI, DI)" />
              <div className="flex items-center justify-center flex-wrap gap-8 w-full">
                  <div className="border border-blue-500/20 text-sm text-gray-500 flex flex-col items-center w-90 rounded-lg">
                      <div className="flex items-center justify-between w-full px-4 py-2">
                          <div className="flex items-center justify-between gap-4">
                              <div className="bg-white p-1.5 rounded border border-gray-500/30">
                                  <img className="h-9" src={assets.brc_logo} alt="dummyFavicon" />
                              </div>
                              <p className="text-lg text-indigo-500  font-semibold ml-20">BRC</p>
                          </div>

                      </div>
                      <div className="flex flex-col items-center gap-3.5 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-blue-500/20">
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>4 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                          <div className="w-full h-px bg-gray-300/60"></div>
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>6 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                          <div className="w-full h-px bg-gray-300/60"></div>
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>8 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                      </div>
                  </div>

                  <div className="border border-blue-500/20 text-sm text-gray-500 flex flex-col items-center w-90 rounded-lg">
                      <div className="flex items-center justify-between w-full px-4 py-2">
                          <div className="flex items-center justify-between gap-4">
                              <div className="bg-white p-1.5 rounded border border-gray-500/30">
                                  <img className="h-9" src={assets.prins_logo_90} alt="dummyFavicon" />
                              </div>
                              <p className="text-lg text-indigo-500  font-semibold ml-20">PRINS</p>
                          </div>

                      </div>
                      <div className="flex flex-col items-center gap-3.5 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-blue-500/20">
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>4 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                          <div className="w-full h-px bg-gray-300/60"></div>
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>6 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                          <div className="w-full h-px bg-gray-300/60"></div>
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>8 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                      </div>
                  </div>
                  <div className="border border-blue-500/20 text-sm text-gray-500 flex flex-col items-center w-90 rounded-lg">
                      <div className="flex items-center justify-between w-full px-4 py-2">
                          <div className="flex items-center justify-between gap-4">
                              <div className="bg-white p-1.5 rounded border border-gray-500/30">
                                  <img className="h-9" src={assets.aeb_logo_90} alt="dummyFavicon" />
                              </div>
                              <p className="text-lg text-indigo-500  font-semibold ml-20">AEB</p>
                          </div>

                      </div>
                      <div className="flex flex-col items-center gap-3.5 w-full p-4 pb-2 rounded-b-lg bg-white border-t border-blue-500/20">
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>4 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                          <div className="w-full h-px bg-gray-300/60"></div>
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>6 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                          <div className="w-full h-px bg-gray-300/60"></div>
                          <div className="flex items-center w-full justify-between text-lg">
                              <p className='font-bold ml-5'>8 цил.</p>
                              <p className='mr-10'>1900</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>
  )
}

export default PriceCard1
