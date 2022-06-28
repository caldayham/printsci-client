import React from "react";
import { useSelector } from "react-redux";

import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductAmount from "../../components/SubComponents/ProductAmount/ProductAmount";

import {
  TopTexts,
  TopText,
  CartItems,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductMaterial,
  ProductSize,
  PriceDetail,
  MaterialSwatch,
  ProductPrice,
  SummaryItem,
  SummaryItemText,
  SummaryTitle,
  SummaryItemPrice,
  ProductCheckout,
  CartContent,
  CartCheckout,
  EditOptions,
  Icon,
} from "./styles";
import {
  CheckoutButton,
  MainContainer,
  ShopNowButton,
  Title,
  Subtitle,
  Paragraph,
  CustomLink,
} from "../../tools/globalStyles";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import Newsletter from "../../components/Newsletter/Newsletter";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  function calculatePrice(product) {
    console.log(product);

    var packagePrice = product.basePrice;

    var currentPackagePriceMultiplier = 1;
    product.options.map((option) => {
      // getting the total multiples over the base price
      currentPackagePriceMultiplier *=
        option.optionSelections[option.selectedOption].selectionPriceMultiplier;
      return currentPackagePriceMultiplier;
    });

    packagePrice = (
      packagePrice *
      currentPackagePriceMultiplier *
      product.quantity
    ).toFixed(2);

    return packagePrice;
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <MainContainer>
        {/*here is the left side content for the cart content*/}
        <CartContent>
          <TopTexts>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Title>Your Cart</Title>
              <CustomLink to={`/catalog/all`}>
                <ShopNowButton style={{ marginTop: "10px" }}>
                  Continue Shopping
                </ShopNowButton>
              </CustomLink>
            </div>
            <div style={{ display: "flex" }}>
              <TopText>Cart ({cart.quantity})</TopText>
              <TopText>Saved (0)</TopText>
            </div>
          </TopTexts>
          <CartItems>
            {cart.products.map((product, i) => (
              <Product key={i}>
                <EditOptions>
                  <Icon>
                    <CustomLink to={`/product/${product._id}`}>
                      <EditOutlinedIcon />
                    </CustomLink>
                  </Icon>
                  <Icon>
                    <CustomLink to={`/mycart`}>
                      <SaveAltOutlinedIcon />
                    </CustomLink>
                  </Icon>
                  <Icon>
                    <CustomLink to={`/home`}>
                      <DeleteOutlinedIcon />
                    </CustomLink>
                  </Icon>
                </EditOptions>
                <ProductDetail>
                  {console.log(product)}
                  <Image src={product.imgs[0]} />
                  <Details>
                    <div>
                      <Subtitle>{product.title}</Subtitle>
                      <Paragraph>
                        <b>Part ID:</b> {product.partId}
                      </Paragraph>
                    </div>
                    <ProductMaterial>
                      <b>Material:</b> PLA Plastic
                      <MaterialSwatch color="#cf7500" />
                    </ProductMaterial>
                    <ProductSize>
                      <b>Size:</b> Medium
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductPrice>${calculatePrice(product)}</ProductPrice>
                  <ProductAmount />
                </PriceDetail>
              </Product>
            ))}
          </CartItems>
        </CartContent>
        {/*here is the right side content for the checkout*/}
        <CartCheckout>
          <ProductCheckout>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$410.24</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$18.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-18.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <CheckoutButton>Checkout</CheckoutButton>
          </ProductCheckout>
        </CartCheckout>
      </MainContainer>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CartPage;
