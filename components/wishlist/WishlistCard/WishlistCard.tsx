import { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import s from './WishlistCard.module.css'
import { Trash } from '@components/icons'
import { Button, Text } from '@components/ui'

import style from '@components/ProfileInnerPages/ProfileInner.module.css'
import AddToCartPlus from '@assets/sleekshop-new-svg/addToCartPlus.svg'
import CloseSvg from '@assets/sleekshop-new-svg/close.svg'

import { useUI } from '@components/ui/context'
import type { Product } from '@commerce/types/product'
import usePrice from '@framework/product/use-price'
import useAddItem from '@framework/cart/use-add-item'
import useRemoveItem from '@framework/wishlist/use-remove-item'
import useWishlist from '@framework/wishlist/use-wishlist'

import Modals from '../Modals/AddToCartModal'

interface Props {
  product: Product
}

const placeholderImg = '/product-img-placeholder.svg'

const WishlistCard: FC<Props> = ({ product }) => {
  const { price } = usePrice({
    amount: product.price?.value,
    baseAmount: product.price?.retailPrice,
    currencyCode: product.price?.currencyCode!,
  })
  // @ts-ignore Wishlist is not always enabled
  const removeItem = useRemoveItem({ wishlist: { includeProducts: true } })
  const [loading, setLoading] = useState(false)
  const [removing, setRemoving] = useState(false)

  const [ShowPartialProductDetailsPage, setShowPartialProductDetailsPage] =
    useState(false)

  const [itemCountState, setitemCountState] = useState({
    val: 1,
    status: '',
    diableAddToCart: false,
  })

  // TODO: fix this missing argument issue
  /* @ts-ignore */
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const { data } = useWishlist()

  const handleRemove = async () => {
    setRemoving(true)
    // console.log('productIdToRemove', product.id!)

    try {
      // If this action succeeds then there's no need to do `setRemoving(true)`
      // because the component will be removed from the view
      console.log('product which has to be deleted ', product)

      const itemInWishlist = data?.items?.find(
        // @ts-ignore Wishlist is not always enabled
        (item) => {
          return (
            item.product_id === Number(product.id) &&
            (item.variant_id as any) === Number(product.variants[0].id)
          )
        }
      )

      if (itemInWishlist) {
        let deleteRes = await removeItem({ id: itemInWishlist.id! })
      }
    } catch (error) {
      setRemoving(false)
    }
  }
  const addToCart = async () => {
    setLoading(true)

    try {
      await addItem({
        productId: String(product.id),
        variantId: String(product.variants[0].id),
        quantity: itemCountState.val,
      })

      openSidebar()
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  const handleDecrement = () => {
    if (itemCountState.val > 1) {
      setitemCountState((prevState) => ({
        ...prevState,
        val: itemCountState.val - 1,
      }))
    }
  }

  const handleIncrement = () => {
    if (true) {
      setitemCountState((prevState) => ({
        ...prevState,
        val: itemCountState.val + 1,
      }))
    } else {
      let itemStatus = 'outOfStock'

      setitemCountState((prevState) => ({
        ...prevState,
        val: itemCountState.val + 1,
        status: itemStatus,
        diableAddToCart: true,
      }))
    }
  }

  return (
    <>
      {ShowPartialProductDetailsPage && (
        <Modals
          setShowPartialProductDetailsPage={setShowPartialProductDetailsPage}
          ShowPartialProductDetailsPage={ShowPartialProductDetailsPage}
          CurrentObj={product}
        />
      )}

      <div className="productCard">
        <button className="deleteButtonWishlist" onClick={handleRemove}>
          <CloseSvg />
        </button>

        <div className="productCardImgParent">
          <img
            className="ProductImg"
            src={product.images[0]?.url}
            alt={product.images[0]?.alt || 'Product Image'}
          />
        </div>
        <div className="Product-Model-Parent mt-1 skuParent">
          <p className="Product-Model skuFontSt">SKU: {product.id}</p>
        </div>
        <div className="mt-1 orderNameP">
          <Link href={`${product.path?.replace('.html', '')}`}>
            <a>
              <p className="Product-Name productName">{product.name}</p>
            </a>
          </Link>
        </div>
        <div className="productBrandP mt-1">
          {/* <p className="Product-brand ">{product.brand}</p> */}
        </div>
        <div className="pPrice_AddToCartP">
          <div className="mt-1 d-flex align-items-center justify-content-between pPrice_AddToCart ">
            <p className="Product-price productPriceAdd">{price}</p>
            <p
              className="addToCartButton"
              onClick={() => {
                setShowPartialProductDetailsPage(true)
              }}
            >
              <AddToCartPlus />
            </p>
          </div>
        </div>

        <div className="AddToCartOnHover">
          <div className={`${style.incrementParent}`}>
            {/* ===================Qty Text=================== */}
            <span className={`${style.QtyText}`}>QTY</span>

            {/* ===================decreent button=================== */}
            <button
              className={`${style.decrementBtn}`}
              onClick={() => {
                return handleDecrement()
              }}
            >
              -
            </button>

            {/* current value of product quantity //  #input field for all subcomponents */}
            <input
              disabled
              className={`${style.inputEDCartVal}  ${
                itemCountState.status === 'outOfStock'
                  ? style.outOfStock
                  : itemCountState.status === 'inStock' && style.inStock
              }`}
              value={itemCountState.val}
            />

            {/* ===================increment button=================== */}
            <button
              className={` ${style.incrementBtn} `}
              onClick={() => {
                return handleIncrement()
              }}
            >
              +
            </button>
          </div>
          <button
            // disabled={Boolean(
            //   handleRenderingItemCount(index, itemCountState)[2]
            // )}
            className="h6AddToCart"
            onClick={addToCart}
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </>
  )
}

export default WishlistCard
