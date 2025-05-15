// routes/paymentRoutes.js

const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // გამოიყენე .env ფაილიდან

router.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;

  const line_items = cartItems.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: parseFloat(item.price.replace("$", "")) * 100,
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe შეცდომა:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
