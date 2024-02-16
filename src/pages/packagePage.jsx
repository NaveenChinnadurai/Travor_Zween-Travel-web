import React from 'react'
import PackageCard from '../compo/cards/package'
import Header from '../compo/utils/header'
import places from '../scripts/places'
import SearchField from '../compo/utils/searchField'
import Plane from '../compo/utils/plane'
function PackagePage() {
  window.scroll(0,0)
  return (
    <div className='row d-flex justify-content-center pt-0'>
      <Header title1="Packages" title2="Our Packages" className="mt-2 pt-3" />
      <Plane/>
      <SearchField className="col-10 search-field-div" />
      <div className="row d-flex m-0 justify-content-center gap-5 mb-5 px-md-0 pt-5">
        {
          places.map((e) => {
            return (
              <PackageCard
                obj={e.packageInfo}
                keys={e.id}
                animation={e.id % 2 == 0 ? "zoom-out-left" : "zoom-out-right"}
                className="col-10 col-sm-5 col-md-4 col-lg-3 "
              />
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default PackagePage