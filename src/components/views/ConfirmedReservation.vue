<template>
  <div class="confirmed-reservation">
    <div class="left">
      <div class="popup">
        <div class="header">
          <img class="checked" src="../../assets/svg/checked.svg" />
          <span class="text-confirmed">Réservation confirmée</span>
        </div>
        <div class="content">
          <span>Un message de notification a été envoyé à</span>
          <UserCard />
          <button class="chat-button" @click="openChat = true">
            <span>Messagerie</span>
            <img class="typing" src="../../assets/typing.png" />
          </button>
        </div>
      </div>
    </div>
    <div class="right">
      <span class="thanks">Merci d'avoir utilisé Unit'Eat !</span>
      <!-- <img class="thanks-picture" src="../../assets/confirmation.svg" /> -->
    </div>
    <Chat v-if="openChat" @close="openChat = false" />
  </div>
</template>

<script>
import UserCard from "@/components/product/UserCard.vue";
import Chat from "@/components/base/Chat.vue"

export default {
  name: "ConfirmedReservation",
  components: {
    UserCard,
    Chat
  },
  data() {
    return {
      openChat: false,
    };
  }
};
</script>

<style lang="scss" scoped>
.confirmed-reservation {
  display: flex;
  height: 90vh;
  font-family: "Montserrat";
  .left {
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 1rem;
    .popup {
      width: 90%;
      height: 100%;
      box-shadow: 0px 3px 15px #00000029;
      border-radius: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .header {
        height: 12%;
        width: 100%;
        border-radius: 40px 40px 0 0;
        background-color: #1d515e;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        .checked {
          margin-right: 0.5rem;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: space-around;
      }
      .chat-button {
        background: #2f2e41;
        color: #ffffff;
        box-shadow: 0px 3px 6px #00000029;
        border: none;
        border-radius: 38px;
        padding: 0.5em;
        width: 11em;
        font-weight: bold;
        outline: none;
        text-decoration: none;
        .typing {
          margin-left: 0.5rem;
          filter: invert(100%);
        }
      }
    }
  }
  .right {
    width: 50%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .thanks {
      font-family: "Raleway";
      font-weight: bold;
      font-size: 2rem;
    }
  }
}
</style>