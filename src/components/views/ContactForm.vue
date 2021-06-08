<template>
  <div class="contact-form">
    <Navbar />
    <div class="content">
      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="group">
          <span class="text-input">Nom d'utilisateur</span>
          <input
            type="text"
            name="name"
            class="data-input"
            placeholder="John"
          />
        </div>
        <div class="group">
          <span class="text-input">Email</span>
          <input
            type="email"
            name="email"
            class="data-input"
            placeholder="johndoe@example.com"
          />
        </div>
        <div class="group">
          <span class="text-input">Message</span>
          <textarea class="message-input" name="message" maxlength="255" />
        </div>
        <input class="button-submit" type="submit" value="Envoyer" />
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import Navbar from "../base/Navbar.vue";
import Footer from "../base/Footer.vue";

export default {
  name: "ContactForm",
  components: { Navbar, Footer },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_aof6qdf",
          "template_396g7cl",
          e.target,
          "user_jon2DZLjLfJA7p7GqifZi"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    .group {
      display: flex;
      flex-direction: column;
      margin-top: 1em;
      .data-input {
        width: 25em;
        height: 3em;
        border: 2px solid #aaaaaa;
        border-radius: 38px;
        text-indent: 1.5em;
        outline: none;
      }
      .message-input {
        width: 35em;
        height: 10em;
        border: 2px solid #aaaaaa;
        border-radius: 38px;
        text-indent: 1.5em;
        outline: none;
        resize: none;
      }
    }
    .button-submit {
      margin-top: 1em;
      background: #ffa62b;
      box-shadow: 0px 3px 6px #00000029;
      border: none;
      border-radius: 38px;
      padding: 0.5em;
      width: 13em;
      font-weight: bold;
      outline: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .content {
      .group {
        .data-input,
        .message-input {
          width: 20em;
        }
      }
    }
  }
}
</style>