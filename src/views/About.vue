<template>
  <div class="about">
    <Navbar />
    <div class="content">
      <span class="main-title">Apprenez en plus sur Unit'Eat</span>
      <div class="section">
        <div class="left">
          <span class="title">Qu'est ce que Unit'Eat ?</span>
          <span class="text"
            >Unit’Eat est une plateforme en ligne de dons alimentaires. La
            volonté de ce projet est de créer un outil en ligne pour permettre
            aux associations d’aide alimentaire de récolter des dons en nature,
            tout en facilitant la démarche des particuliers.
          </span>
        </div>
        <div class="right">
          <img class="undraw" src="../assets/undraw/undraw_gift.svg" />
        </div>
      </div>
      <div class="section">
        <div class="right">
          <img class="undraw" src="../assets/undraw/undraw_development.svg" />
        </div>
        <div class="left">
          <span class="title">Pourquoi ce projet ?</span>
          <span class="text"
            >Dès le début, l’ensemble de l’équipe a émis le souhait de créer un
            concept solidaire. La précarité touche de plus en plus d’individus
            suite à la crise sanitaire et économique qui touche le monde entier,
            nous voulions donc trouver une solution à notre échelle.
          </span>
          <br />
          <span class="text">
            L’idée de cette plateforme est d’abord née d’un premier constat : le
            gaspillage alimentaire lors des départs en vacances. Beaucoup
            d’individus sont contraints de jeter des denrées périssables avant
            de partir en vacances, ou avant de rentrer de leur séjour. Et s’ils
            pouvaient en faire don au lieu de les jeter ?
          </span>
          <br />
          <span class="text">
            Il n’est pas toujours évident de trouver une association lorsque
            nous sommes dans un endroit que nous connaissons peu, et surtout que
            nous sommes pressés. Difficile également pour les associations de
            savoir que des denrées consommables qu’elles pourraient récupérer
            sont sur le point d’être jetées.
          </span>
        </div>
      </div>
      <div class="section-founders">
        <span class="title">Les fondateurs</span>
        <div class="founders" >
          <div class="informations" v-for="founder in founders" :key="founder.id">
            <div class="presentation">
              <span class="name">{{ founder.name }} - </span>
              <span class="job">{{ founder.job }}</span>
            </div>
            <div class="description">
              <span class="text">{{ founder.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/base/Footer.vue";
import Navbar from "@/components/base/Navbar.vue";
export default {
  components: { Navbar, Footer },
  data() {
    return {
      founders: [
        {
          name: "Maureen Choron",
          job: "Rédactrice web",
          description:
            "En 2020, Maureen a obtenu son BTS Support à l’Action Managériale. D’un naturel créatif, curieuse de tout ce qui peut toucher au digital, elle a choisi d’effectuer une 3ème année d’étude en Webmarketing et Social Media. Pour cette année en alternance elle occupe le poste de Rédactrice Web dans une Entreprise de Services Numériques. Elle prend beaucoup de plaisir à rédiger ses articles qui sont publiés une fois par semaine sur le blog de l’entreprise."
        },
        {
          name: "Thomas Coutey",
          job: "Chef de projet",
          description:
            "Thomas a obtenu un DUT Métiers du Multimédia et de l’Internet en 2020. C’est naturellement qu’il s’est dirigé vers le domaine du web dans sa forme globale et qu’il est actuellement en 3ème année de Bachelor Webmarketing & Social Media. Ayant toujours eu un attrait pour le graphisme et la conception web, il se passionne pour la conception UX/UI de sites internet. Thomas est actuellement Chef de Projet Web en alternance chez Chauffamat à Tourcoing où il supervise la création d’un nouveau site internet."
        },
        {
          name: "Olivia Bouligny",
          job: "Cheffe de projet",
          description:
            "Après l’obtention d’un BTS Communication et d’une L1 en Sociologie Quantitative, Olivia a souhaité se spécialiser dans le digital. Elle s’épanouit pleinement dans son poste de cheffe de projet web au sein d’une agence de marketing spécialisée dans le fundraising."
        },
        {
          name: "Eva Chochoi",
          job: "Développeuse web",
          description:
            "Ce projet m’a appris beaucoup de choses : Le travail d’équipe, avec mes collègues de Chef de projet, développeur, UX designer, j’ai appris à m’organiser, nous avons décidé de travail en méthode agile et avec l’outil Trello, pour pouvoir suivre nos évolutions, nos retards et faire des points chaque vendredi matin pour savoir comment le projet avancer chacun de son côté ou de régler les problèmes s'il y en avait. "
        },
        {
          name: "Charles François",
          job: "Développeur web",
          description:
            "Après l’obtention d’un BTS Systèmes Numériques opt. Informatique et Réseaux, Charles a souhaité se spécialiser dans le développement de sites web. Il s’intègre parfaitement dans sa mission de Développeur Full Stack dans une entreprise du retail."
        }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  .content {
    padding: 1rem 3rem;
    min-height: 100vh;
    .main-title {
      color: #1d515e;
      font-size: 2rem;
      font-weight: 700;
      text-decoration: underline;
    }
    .section {
      display: flex;
      justify-content: space-around;
      margin-bottom: 5rem;
      .title {
        color: #1d515e;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .left {
        display: flex;
        flex-direction: column;
        width: 50%;
        justify-content: center;
      }
      .right {
        align-self: center;
        .undraw {
          height: 20rem;
          width: 100%;
        }
      }
    }
    .section-founders {
      margin-bottom: 5rem;
      .title {
        color: #1d515e;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .founders {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      .informations {
        display: flex;
        flex-direction: column;
        .presentation {
          .name {
            color: #4d4c5c;
            font-weight: bold;
          }
          .job {
            color: #1d515e;
            font-style: italic;
          }
        }
        .description {
          background-color: #F6E5C9;
          padding: 1rem;
          border-radius: 10px;
        }
      }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .content {
      .section {
        .left {
          width: 100%;
        }
      }
      .undraw {
        display: none;
      }
    }
  }
}
</style>