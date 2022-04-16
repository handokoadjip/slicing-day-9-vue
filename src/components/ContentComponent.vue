<template>

  <section>
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 px-0 py-3" v-for="(list, index) in lists" :key="index" :id="list.title">
          <figure>
            <img className="img-fluid w-100 h-image mb-5" :src="list.image" :alt="`image-${index}`" />
            <figcaption>
              <h2 className="text-center">{{romanize(index + 1)}}</h2>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContentComponent",
  data() {
    return {
      lists: [
        {
          image: require("@/assets/source/image/img-1.jpg"),
        },
        {
          image: require("@/assets/source/image/img-2.jpg"),
        },
        {
          image: require("@/assets/source/image/img-3.jpg"),
        },
        {
          image: require("@/assets/source/image/img-4.jpg"),
        },
        {
          image: require("@/assets/source/image/img-5.jpg"),
        },
        {
          image: require("@/assets/source/image/img-6.jpg"),
        },
      ]
    }
  },
  methods: {
    romanize: function(num) {
      var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      };
      var str = "";

      for(var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
      }

      return str;
    }
  },
}
</script>