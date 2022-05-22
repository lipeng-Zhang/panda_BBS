<template>
  <div class="wrapper" @click="closeVideo">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="for-video" v-show="videoState">
            <my-video />
          </div>
          <div
            class="
              md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100
            "
          >
            <h1 class="title">Help protect giant pandas</h1>
            <h4>
              Despite their exalted status and relative lack of natural
              predators, pandas are still at risk. Severe threats from humans
              have left just over 1,800 pandas in the wild.
            </h4>
            <br />
            <md-button @click.stop="watchVideo" class="md-success md-lg"
              ><i class="fas fa-play"></i> Watch video</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="
                md-layout-item md-size-66 md-xsmall-size-100
                mx-auto
                text-center
              "
            >
              <h2 class="title">The conclusion</h2>
            </div>
            <p>
              Native to the mountain forests of southwest China, the giant panda
              is one of the most beloved animals in the world.
            </p>
            <p>
              Giant pandas are identified by their distinctive black and white
              coloring. Their ears, muzzle, eyes, shoulders and legs are black
              while the rest of their body is white. Their thick hair keeps them
              warm in the cool, wet mountain zones. When on all fours, giant
              pandas average between 60-100 cm (2-3 ft.) tall at the shoulder
              and between 1-2 m (4-6 ft.) long. They can weigh between 100-115
              kg (220-250 lb.), with males being larger than females.
            </p>
            <p>
              One of the interesting evolutionary traits of the panda is their
              protruding wrist bone that acts like a thumb. This helps the
              pandas hold bamboo while they munch on it with their strong molar
              teeth. Bamboo makes up nearly the entire diet of the panda. Due to
              the low nutritional value of bamboo, pandas need to eat 10-20 kg
              (20-40 lb.) a day. Occasionally pandas will eat other available
              food, including small rodents, eggs, fish and other flora. Bamboo
              provides a good amount of water, but pandas need to supplement
              this with fresh water daily.
            </p>
            <p>
              When pandas are between 4-8 years of age, they reach maturity and
              can reproduce. However, female pandas are only able to become
              pregnant for 2-3 days each spring! In this small window of time,
              male and female pandas find each other through scents and calls
              similar to that of goats or sheep. They do not roar like other
              bears.
            </p>
            <h4 class="title">Conservation Status</h4>
            <p>
              With only around 2060 pandas living in the wild, the giant panda
              is considered vulnerable of extinction by the IUCN Red List. Due
              to the fact that pandas reproduce so infrequently, it is very
              difficult for their population to recover from such a low point.
            </p>
            <p>
              One the main reasons that panda populations have declined is
              habitat destruction. As the human population in China continues to
              grow, pandas’ habitat gets taken over by development, pushing them
              into smaller and less livable areas. Habitat destruction also
              leads to food shortages. Pandas feed on several varieties of
              bamboo that bloom at different times of the year. If one type of
              bamboo is destroyed by development, it can leave the pandas with
              nothing to eat during the time it normally blooms, increasing the
              risk of starvation.
            </p>
            <p>
              To combat this issue, the Chinese government has actively worked
              to restore and protect bamboo habitat, and these measures have
              shown positive results. State Forestry Administration surveys have
              concluded that the panda population has increased since the
              Chinese government’s actions, and in 2016, the IUCN upgraded the
              giant panda’s status from Endangered to Vulnerable.
            </p>
            <p>
              While an increasing panda population is good news for now, it is
              predicted that climate change will eliminate over 35% of the
              panda’s bamboo habitat in the next 80 years.
            </p>
            <h4 class="title">What You Can Do to Help</h4>
            <p>
              Wildlife reserves have been set up in parts of China to make sure
              the pandas have a home, and care is taken to make sure they
              survive in the wild. Researchers continue to study how pandas
              breed in an effort to increase the population. You can help by
              donating or adopting a panda through the World Wildlife Fund.
            </p>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <h2 class="title" id="Characteristic">Characteristic</h2>
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-primary" md-alignment="left">
                <md-tab md-label="Reason of extinction risk">
                  <p>
                    Giant panda is considered a cute and peaceful animal.
                    However, in fact it has the sharpness of teeth which is
                    second only to crocodile and it is one of the outstanding
                    species of evolution.So, why panda lacks biosecurity and is
                    at risk of extinction?There are multiple reasons:
                  </p>
                  <h4 class="title">Lack of reproductive capacity.</h4>
                  <p>
                    Giant panda cubs are different from other bears. Their cubs
                    are equivalent to "premature babies", and their birth weight
                    is only 0.1% of their mother's weight. This characteristic
                    also leads to the low survival rate of wild giant panda
                    cubs. Moreover, it is very difficult for "single mother" to
                    take care of such a small cub. Female giant pandas usually
                    raise their cubs for 18 months, sometimes even two years,
                    until her next child is born.
                  </p>
                  <p>
                    The life span of wild giant pandas is not long, the number
                    of cubs in their life is small, and the cubs are not easy to
                    survive, resulting in the extremely rare population of giant
                    pandas. In addition, the reproductive system of giant pandas
                    is infected by some bacteria, which reduces the spawning
                    rate of females and the mating desire of males, which is
                    also one of the reasons for the imminent extinction of giant
                    pandas.
                  </p>
                  <h4 class="title">Habitat destruction</h4>
                  <p>
                    Due to the blind exploitation of mountains and forests by
                    human beings, the habitat area of giant panda is reduced,
                    and each habitat forms an isolated island shape, resulting
                    in population division. Inbreeding within each ethnic group
                    of giant panda is inevitable and population degradation. The
                    destruction of habitat has reduced the food source of giant
                    pandas, and there are not many bamboos to eat, which has
                    also put great pressure on the survival of giant panda
                    populations.
                  </p>
                  <h4 class="title">Hunting and poaching</h4>
                  <p>
                    For example, since 1963, more than 113 giant pandas have
                    been captured in Baoxing County alone, all for exhibition at
                    home and abroad. According to the analysis of the giant
                    panda application form, it takes about 12 years for a
                    generation, and the population growth is very slow. If a
                    large number of pandas are caught, it will take decades to
                    recover even under the condition of good protection.
                  </p>
                </md-tab>

                <md-tab md-label="Welfare needs">
                  <p>
                    Giant panda’s welfare needs is basically consist of 5
                    aspects: nutrition, health, environment, behaviour, mental
                    state:
                  </p>
                  <h4 class="title">Nutrition</h4>
                  <p>
                    Giant pandas are omnivorous animals, but their main food is
                    bamboo, including bamboo leaves, bamboo shoots and tender
                    bamboo. Although giant pandas was also a strong fighter,
                    today we can see that they disdain to compete with other
                    animals. Because in ancient times, they changed their eating
                    habits and began to eat plants. Since the energy supplement
                    source of plants is not comparable to that of carnivores, we
                    can see that giant pandas are always eating.Besides bamboo,
                    giant pandas will also eat some fruits and vegetables with
                    good taste, such as apples, bananas, cucumbers, carrots and
                    other foods as supplementary food. Wild giant pandas may
                    also eat bamboo rats.
                  </p>
                  <h4 class="title">Health</h4>
                  <p>
                    China enacted the Wildlife Protection Law in 1988,which
                    hugely decrease the number of pandas being hunt and poached.
                    Nowadays, the giant panda has become China's first-class
                    protected animal.For the captive giant pandas, they are
                    being taken good care by the keeper in the zoo.Captive giant
                    pandas is feed high-quality fresh bamboo which has
                    sufficient coarse fiber and some bamboo powder and pod
                    powder. These coarse fibers are the key to ensure the health
                    of giant pandas.Once a giant panda is found sick or injured,
                    they will be immediately sent for treatment.
                  </p>
                  <h4 class="title">Environment</h4>
                  <p>
                    Giant pandas usually grows in the areas with lush forests,
                    good growth of bamboo, relatively stable temperature, good
                    concealment conditions, and abundant food resources and
                    water sources.They are a kind of wet loving animals and
                    their thick fur could help them maintain body temperature at
                    certain level.
                  </p>
                  <h4 class="title">Behaviour</h4>
                  <p>
                    Giant pandas spend nearly half of their time eating every
                    day,then usually spend about 2-3 hours for free playing, and
                    most of the rest is in sleep. In the wild, giant pandas
                    sleep for 2-4 hours in the middle of every two meals. Lying
                    on their back, lying on their sides, lying on their stomach,
                    stretching or curling up are their preferred sleeping
                    methods.Giant pandas will sometimes climb on trees. Climbing
                    a tree is usually a way for the weak to avoid the strong
                    when or meeting each other or approaching the proposal
                    period, or avoiding danger。 In the zoo, the keepers feed
                    them regularly twice a day, so pandas spend the rest of
                    their time resting.
                  </p>
                  <h4 class="title">Mental state</h4>
                  <p>
                    The mental state of panda is appeared by their behavior.Like
                    normal animals, when they hear a abnormal noises, they will
                    be scaried and run away immediately. Also, when a captive
                    panda is criticized by their keeper, it will feel unhappy
                    and stop eating for a while.
                  </p>
                </md-tab>

                <md-tab md-label="experiences in zoos">
                  <p>
                    Pandas are solitary creatures.They inherit the habit of
                    their ancestors living separately, have a strong sense of
                    territory, have a fixed territory in their life, and will
                    leave marks in the territory with their secretions. In a
                    familiar environment, they can get food better. At the same
                    time, living alone is also conducive to regulating the
                    density of the population, avoiding competition within the
                    population and making rational use of the resources in the
                    habitat.
                  </p>
                  <p>
                    In the zoo, the pandas’ life are relatively peaceful,
                    eating, playing and sleeping are our three favorite
                    activities in panda daily routine.Adult panda is usually
                    placed separately,or they may have fight with each
                    other.Panda usually stay sleep to reduce energy consumption,
                    the keepers feed them regularly twice a day.sometime pandas
                    will roll on the ground for playing or climb on trees.
                  </p>
                </md-tab>
                <md-tab md-label="conditions for captive breeding">
                  <p>
                    In the natural environment, giant pandas have the
                    characteristics of low mating rate, late maturity, long
                    reproductive cycle, selectivity to spouses, low
                    fertilization rate and low survival rate of cubs. However,
                    it is even more difficult for captive giant pandas to
                    reproduce successfully.
                  </p>
                  <h4 class="title">Suitable environment</h4>
                  <p>
                    Although the pandas in zoo are being taken good care, zoo’s
                    environment is different from giant pandas’ native
                    environment, it changes their living rules and living
                    habits.To successfully breed in captivity, air condition,
                    stable temperature, suitable humidity, and abundant food and
                    water supply are very important factors.
                  </p>
                  <h4 class="title">Appropriate exercise</h4>
                  <p>
                    Unlike the wild giant panda, captive pandas are raised in
                    relative peaceful and small habitat which make the captive
                    giant panda lack of exercise and competition, there fore the
                    captive giant pandas are usually more weak than the wild
                    pandas.Appropriate exercise is quite needed for captive
                    pandas that can help with their health and living ability.
                  </p>
                  <h4 class="title">Time</h4>
                  <p>
                    Female pandas only ovulate once a year. Not only that, but
                    the window that a male panda has to inseminate the female
                    while she has an egg ready to go is only about 36 to 40
                    hours. If they miss that mark, the zookeepers have to
                    monitor the potential mom until the next spring before she
                    can attempt to have a baby, therefore perfect timing is also
                    important.
                  </p>
                  <h4 class="title">Artificially inseminate</h4>
                  <p>
                    Many giant pandas are bred in captivity or captured in the
                    wild, some of them may not know how to reproduce.If the male
                    giant panda doesn't know how to reproduce with female panda,
                    the zoo keeper may indeed choose artificially insemination
                    for the female.Unfortunately, zookeepers usually don't know
                    whether a panda is really pregnant until it is born.Even
                    without a fetus, female pandas will show the appearance of
                    pregnancy by nesting, sleeping more and eating less
                  </p>
                </md-tab>
                <md-tab md-label="Reference data evaluation">
                  <h4 class="title">Authority</h4>
                  <p>
                    lots of data are searched from the news and informal essays,
                    the rest information is from Baidu Encyclopedia . These
                    information should is not very authoritative except Baidu
                    Encyclopedia, but quite easy to understand by normal people.
                  </p>
                  <h4 class="title">Accuracy</h4>
                  <p>
                    The data accuracy should be relatively accurate, as lots of
                    found information is repeated when searching online.
                  </p>
                  <h4 class="title">Currency</h4>
                  <p>
                    The inclusion seldom use Technical Term, it gather
                    information from public news and Baidu Encyclopedia should
                    be widely accepted by a lot of people.
                  </p>
                  <h4 class="title">Relevance</h4>
                  <p>
                    all the inclusion is related to the target animal, though
                    some description or inclusion may not very suit for the
                    small topic.
                  </p>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myVideo from "./components/MyVideo";
import { NavTabsCard } from "@/components";
export default {
  bodyClass: "landing-page",
  components: { myVideo, NavTabsCard },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/index_bg2.png"),
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      videoState: false,
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
    watchVideo() {
      this.videoState = true;
    },
    closeVideo(e) {
      if (e.pageX < 552 || e.pageX > 1161 || e.pageY > 536) {
        this.videoState = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.for-video {
  position: relative;
  float: left;
  width: 800px;
  left: 20%;
  bottom: 50%;
}
p {
  text-align: left;
  font-size: 16px;
}
h4 {
  text-align: left;
}
</style>
