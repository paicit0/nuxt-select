<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex flex-column mb-3 align-items-center" style="max-width: 600px;">
      <h2 class="align-self-start">ขนาด</h2>
      <div class="w-100 mb-3">
        <div class="btn-group w-100" role="group" aria-label="Button group">
          <button 
            v-for="shape in shapes" 
            :key="shape.value"
            class="btn" 
            :class="[selectedShape === shape.value ? 'btn-primary' : 'btn-outline-primary']"
            @click="selectShape(shape.value)"
          >
            {{ shape.label }}
            <i v-if="selectedShape === shape.value" class="bi bi-check ms-1"></i>
          </button>
        </div>
      </div>

      <h2 class="align-self-start">โทนสี</h2>
      <div class="w-100 mb-3">
        <div class="row row-cols-5 g-2">
          <div v-for="(color, index) in customColors" :key="color" class="col" :class="{ 'offset-md-4': index === customColors.length - 1 }">
            <button 
              type="button" 
              class="btn btn-circle w-100"
              :style="{ backgroundColor: color }"
              @click="selectColor(color)"
            >
              {{color}}
              <i v-if="selectedColor === color" class="bi bi-check"></i>
            </button>
          </div>
        </div>
      </div>

      <h2 class="align-self-start">สไตล์ภาพ</h2>
      <div class="row row-cols-3 mx-auto g-3" id="card-container" role="group" aria-label="Button group">
        <div v-for="(card, index) in displayedCards" :key="index" class="col">
          <div class="card h-100">
            <img :src="card.imgSrc" class="card-img-top" :alt="card.title">
            <div class="card-img-overlay d-flex flex-column justify-content-end">
              <button 
                class="btn" 
                :class="[selectedStyle === card.title ? 'btn-primary' : 'btn-outline-light']"
                @click="selectStyle(card.title)"
              >
                {{ card.title }}
                <i v-if="selectedStyle === card.title" class="bi bi-check ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button v-if="showLoadMore" @click="loadMore" class="btn btn-primary mt-3">โหลดเพิ่ม</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shapes: [
        { value: 'vertical', label: 'แนวตั้ง' },
        { value: 'horizontal', label: 'แนวนอน' },
        { value: 'square', label: 'จตุรัส' }
      ],
      customColors: [
        '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF',
        '#33FFF6', '#F6FF33', '#FF33F6', '#F6A533', '#F63333',
        '#33F633', '#F6F633', '#F633A1', '#F6A533', '#A1F633',
        '#5733FF'
      ],
      cardData: [
        { imgSrc: '/vintage.jpg', title: 'Vintage' },
        { imgSrc: '/modern.jpg', title: 'Modern' },
        { imgSrc: '/romantic.jpg', title: 'Romantic' },
        { imgSrc: '/medieval.jpg', title: 'Medieval' },
        { imgSrc: '/renaissance.jpg', title: 'Renaissance' },
        { imgSrc: '/greek.jpg', title: 'Greek' },
        { imgSrc: '/3d.jpg', title: '3d' },
        { imgSrc: '/anime.jpg', title: 'Anime' },
        { imgSrc: '/pixelart.jpg', title: 'Pixel Art' },
        { imgSrc: '/fantasy.jpg', title: 'Fantasy' },
        { imgSrc: '/scifi.jpg', title: 'Scifi' },
        { imgSrc: '/rural.jpg', title: 'Rural' },
        { imgSrc: '/horror.jpg', title: 'Horror' },
        { imgSrc: '/city.jpg', title: 'City' },
        { imgSrc: '/nature.jpg', title: 'Nature' },
        { imgSrc: '/dream.jpg', title: 'Dream' },
        { imgSrc: '/suburban.jpg', title: 'Suburban' },
        { imgSrc: '/urban.jpg', title: 'Urban' }
      ],
      selectedShape: null,
      selectedColor: null,
      selectedStyle: null,
      displayedCount: 12,
    };
  },
  computed: {
    displayedCards() {
      return this.cardData.slice(0, this.displayedCount);
    },
    showLoadMore() {
      return this.displayedCount < this.cardData.length;
    },
  },
  methods: {
    selectShape(shape) {
      this.selectedShape = shape;
    },
    selectColor(color) {
      this.selectedColor = color;
    },
    selectStyle(style) {
      this.selectedStyle = style;
    },
    loadMore() {
      this.displayedCount += 3;
    },
  },
};
</script>

<style scoped>
.btn-circle {
  aspect-ratio: 1 / 1;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-circle.selected {
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

.card-img-top {
  height: 200px; 
  object-fit: cover; 
}
</style>