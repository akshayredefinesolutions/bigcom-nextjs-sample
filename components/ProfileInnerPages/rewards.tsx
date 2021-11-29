// import type { GetStaticPropsContext } from 'next'
// import commerce from '@lib/api/commerce'
// import { Bag } from '@components/icons'
// import { Layout } from '@components/common'
// import { Container, Text } from '@components/ui'

// import ProfileHead from '@components/common/ProfileNavlink/profile_head'

// export async function getStaticProps({
//   preview,
//   locale,
//   locales,
// }: GetStaticPropsContext) {
//   const config = { locale, locales }
//   const pagesPromise = commerce.getAllPages({ config, preview })
//   const siteInfoPromise = commerce.getSiteInfo({ config, preview })
//   const { pages } = await pagesPromise
//   const { categories } = await siteInfoPromise

//   return {
//     props: { pages, categories },
//   }
// }

export default function Reward() {
  return (
    // <Container>
    //   <div className="container">
    // <div className="account account--fixed">
    //   <h2 className="page-heading">Rewards</h2>

    //   <ProfileHead />

    //   <div className="flex-1 p-24 flex flex-col justify-center items-center ">
    //     <span className="border border-dashed border-secondary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-primary text-primary">
    //       <Bag className="absolute" />
    //     </span>
    //     <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
    //       No orders found
    //     </h2>
    //     <p className="text-accent-6 px-10 text-center pt-2">
    //       Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
    //     </p>
    //   </div>
    // </div>
    //   </div>
    // </Container>

    <>
      {/* <!-- ---------------------------- component order history ---------------------------- --> */}
      <div className="MainContentInnerdiv mb-2 orderHistory d-flex justify-content-between">
        <div>
          <p className="Heading">Order Details</p>
          <p className="subHeading">Thanks For Your Order</p>
        </div>
        <div>
          <p className="subHeading">
            <span className="Heading"> Oder Id : </span>o3u49873
          </p>
          <p className="subHeading">
            <span className="Heading"> Order Data :</span> 25/11/2021
          </p>
        </div>
      </div>
      {/* <!-- ---------------------------- component order history ---------------------------- --> */}

      {/* <!-- ---------------------------- component BillingShipping ---------------------------- --> */}
      <div className="MainContentInnerdiv mb-2 BillingShipping d-flex justify-content-between">
        <div className="Billing">
          <p className="BillingHeading Heading">Billing</p>
          <p className="subHeading">Kanh Nguyen</p>
          <p className="subHeading">14251 Chamber rd.</p>
          <p className="subHeading">Tustin, CA 92780</p>
        </div>
        <div className="Shipping">
          <p className="BillingHeading Heading">Shipping</p>
          <p className="subHeading">Kanh Nguyen</p>
          <p className="subHeading">14251 Chamber rd.</p>
          <p className="subHeading">Tustin, CA 92780</p>
        </div>
      </div>
      {/* <!-- ---------------------------- component order history ---------------------------- --> */}

      {/* <!-- ---------------------------- component buy it again ---------------------------- --> */}
      <div className="MainContentInnerdiv mb-2">
        {/* <!-- title of the Buy It Again Page  --> */}
        <div className="mainContentChild d-flex justify-content-between">
          <div className="Heading">Buy It Again</div>
          <div className="Heading">6 Items</div>
        </div>

        {/* <!-- product list  --> */}
        <div className="d-flex justify-content-between row">
          <div className="productCard">
            <div className="productCardImgParent">
              <img
                className="ProductImg"
                src="./images/image_033.webp"
                alt=""
              />
            </div>
            <div className="Product-Model-Parent">
              <p className="Product-Model">SKU: 16025</p>
            </div>
            <div>
              <p className="Product-Name">
                American Crew Defining Paste - medium hold with low shine
              </p>
            </div>
            <div>
              <p className="Product-brand">Expresso</p>
            </div>
            <div>
              <p className="Product-price">$ 15.99</p>
            </div>
          </div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
          <div className="productCard"></div>
        </div>
      </div>
      {/* <!-- ---------------------------- component buy it again ---------------------------- --> */}

      {/* <!-- ---------------------------- component Shipment ---------------------------- --> */}
      <div className="MainContentInnerdiv mb-2 BillingShipping d-flex justify-content-between">
        <div className="Billing subHeading">
          <p className="BillingHeading Heading mb-2 shipement-p">Shipment</p>
          <p>Shipping method : Standard</p>
          <p>Shipping data : nov 25 2021</p>
          <p>Tracking # : 485098495884598</p>
          <p>Career : USPC</p>
        </div>
        <div
          className="
                    Shipping
                    subHeading
                    trackOrderParent
                    d-flex
                    justify-content-around
                    align-items-center
                  "
        >
          <button className="ButtonTrackOrder">TRACK ORDER</button>
        </div>
      </div>
      {/* <!-- ---------------------------- component Shipment---------------------------- --> */}

      {/* <!-- ---------------------------- component order card ---------------------------- --> */}
      <div className="MainContentInnerdiv mb-2 orderHistory d-flex justify-content-between">
        <div>
          <p className="Heading">Payment Details</p>
          <p className="subHeading d-flex align-items-center">
            <img
              className="cardImg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADo6Ojc3NwaGhp0dHTX19e1tbWwsLDv7+9ZWVmWlpYjIyMwMDD19fX6+vrR0dFkZGQTExM+Pj6Ghoaenp52dnYNDQ0pKSnHx8dWVlY4ODioqKjExMR+fn7h4eFERERMTEyOjo5oaGiCgoIXFxdidBdzAAAEDklEQVR4nO2d7XqiMBBGKREQVFCKIEJpRff+b3Ht2iYBscTKGia8519R+8wpMPmQzlgWAAAAAAAAAAAAAAAAAAAAAAAoEoU+c8cK88PoETefeafD7mXc7A4nj/m/8YzyZK87emX2SX6vI6uLWHfYdxEXNbvDb11luiP+BVm1VvTznaXuYH/JLvVV/EqK5++brOx1ZBvdQT7I8f1nwflMd4QPM5v/4BdtdYc3CNubI0fkXL05K4Lay5k9Tlju1UFxnTecG4r2sfXGpVO6Yd+Nq53QLa+Sv9OZb6K0fbIJ6F0I3fbtVXWcxdYl+lpS0bsQlq99F2rzr1D15NwR8l41r8D263P51V2uI8SHyRvrIK/5oi8npM09c9gx0ZiuZI1sE8o34eaRRaVeIlnRkTNJKb2Q0BU8KyaSSSmOh9IFfKSVQ9uE0qC+Eiq1OBrQFjwrBkKm/j7IVkKbapIRdNkshPWb1uCG4U3oLC5HbCF91BvbQIiEurL/HRCD/crVHNswuOKUXdaKH9d3JnFE5vz4/NEV24a23sAGw+ZG8edVKabcle7IBkNMwreNVRPN+XYXOXc6r6Lsgg/2KpuNNPD5sF/Y1lo+ocYgbr21NFZ4/R8kgyeNF3wyvqO3rL/NO19LJGIC8EF9zi0T8kF+Y/ENnEB3VIPCU82rxbcaT7qDGpTTt9bS4hs0C91BDQpfL2UWTzpl/8cIIYYLYRikjjmk+w5D+t+ryQgbYUj1q+1uhA0MqQJD+sCQPjCkDwzpA0P6wJA+0zScvczMIetaAW+ZSXTt05i0qS9v68OQKjCkDwzpA0P6wJA+MKQPDOkDQ/rAkD4wpA8M6QND+sDwC1+FcT48rWh43Ae97Mf55K2ioVIVLOf54SugaLjqMmqTPj98BWD4BQxhqBEYfqH0eAbp0WK7UGCcsz3MS+kDQ/rAkD4wpI+ioTvcs4LP3utQnbVlAz3u+WepWuL3yYZKM28lMuMNYxjCEIYw/O+GY82lw/2TyVgNy/lgPLtQGual9IEhfWBIHxjSx3zDeYehSYUhG7W+zK/XZn7NPfPrJppf+5KfTmPrl5pfg9b8OsJm1oLmhSELewL1vM2vyT6Buvrm90aYQH8L83uUmN9nZgK9gszv92T5xvfsMrTvmtxU1sjeeWnjajS+/6G8oHoxs4flBPqQTqCXrFn9gNPObOmb3tO5sy93XATJqPtyJ0ERX0V9qy/3BHqrn5nT7+Mxm//gZ7UGTYoce6crfnl9XdMhLlW2RP2UaknhXaq65buusv5fNzqy6p6H51jdkYTHTFzU964XojzZ9//ikbBP8t8s+SKfeaeDUtUBjewOJ4/5jyxpozBk7lhhYUh3uQ4AAAAAAAAAAAAAAAAAAAAAeDp/AZk4bngcGPyAAAAAAElFTkSuQmCC"
              alt=""
            />
            <span className="ml-2"> Visa </span>
          </p>
        </div>
      </div>
      {/* <!-- ---------------------------- component order card ---------------------------- --> */}

      {/* <!-- ---------------------------- component order total ---------------------------- --> */}
      <div className="MainContentInnerdiv mb-2 orderHistory">
        <p className="Heading mb-4">Order Total</p>
        <div className="d-flex justify-content-between mb-2">
          <div>Subtotal :</div>
          <div>$ 150.00</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-2">
          <div>Coupon :</div>
          <div>$ 150.00</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-2">
          <div>Shipping :</div>
          <div>$ 150.00</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between mb-2">
          <div>Sales Tax :</div>
          <div>$ 150.00</div>
        </div>
        <hr />
        <div className="Heading-grandTotal d-flex justify-content-between mb-2 mt-3">
          <div>Grand Total :</div>
          <div>$ 150.00</div>
        </div>
      </div>
      {/* <!-- ---------------------------- component order total ---------------------------- --> */}
    </>
  )
}
