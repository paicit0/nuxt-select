<script>

export default {
  data() {
    return {
      shapes: [
        { value: 'vertical', label: 'แนวตั้ง', icon: 'grip-vertical' },
        { value: 'horizontal', label: 'แนวนอน', icon: 'grip-horizontal' },
        { value: 'square', label: 'จตุรัส', icon: 'aspect-ratio-fill' }
      ],
      customColors: [
        '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF',
        '#33FFF6', '#F6FF33', '#FF33F6', '#F6A533', '#F63333',
        '#33F633', '#F6F633', '#F633A1', '#8B8000', '#A1F633',
        '#5733FF'
      ],
      colorNames: [
        'Red-Orange', 'Green', 'Blue', 'Pink', 'Purple',
        'Cyan', 'Yellow', 'Magenta', 'Light Orange', 'Light Red',
        'Lime', 'Light Yellow', 'Light Pink', 'Dark Yellow', 'Dark Green',
        'Dark Blue'
      ],
      selectedColors: [],
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
    isSelected(color) {
      return this.selectedColors.includes(color);
    },
    toggleColorSelect(color) {
      if (this.isSelected(color)) {
        this.selectedColors = this.selectedColors.filter(selectedColor => selectedColor !== color);
      } else {
        this.selectedColors.push(color);
      }

    },
    resetAllSelected() {
      this.selectedShape = null;
      this.selectedColor = null;
      this.selectedStyle = null;
      this.selectedColors = [];
      this.displayedCount = 12;

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

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <div class="d-flex justify-content-center">
    <div class="d-flex flex-column mb-3 align-items-center" style="max-width: 600px;">
      <button @click="resetAllSelected" class="btn btn-danger align-self-end">Reset</button>
      <h2 class="align-self-start">ขนาด</h2>
      <div class="w-100 mb-3">
        <div class="btn-group w-100" role="group" aria-label="Button group">
          <button v-for="shape in shapes" :key="shape.value" class="btn me-2"
            :class="[selectedShape === shape.value ? 'btn-primary' : 'btn-outline-primary']"
            @click="selectShape(shape.value)">
            <i :class="`bi bi-${shape.icon} me-2`"></i>
            {{ shape.label }}
          </button>
        </div>
      </div>

      <h2 class="align-self-start">โทนสี</h2>
      <div class="w-100 mb-3">
        <div class="row row-cols-5 g-2 justify-content-start">
          <div v-for="(color, index) in customColors" :key="color" class="col">
            <button type="button" class="btn btn-circle w-100"
              :style="{ color: 'black', backgroundColor: color, position: 'relative', border: isSelected(color) ? '5px solid black' : '1px solid transparent' }"
              @click="toggleColorSelect(color)">
              {{ colorNames[index] }}
              <span v-if="isSelected(color)"
                class="position-absolute rounded-circle bg-primary d-flex align-items-center justify-content-center"
                style="top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 2rem; width: 30px; height: 30px;">
                <i class="bi bi-check" style="color: white;"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <h2 class="align-self-start">สไตล์ภาพ</h2>
      <div class="row row-cols-3 mx-auto g-3" id="card-container" role="group" aria-label="Button group">
        <div v-for="(card, index) in displayedCards" :key="index" class="col">
          <div class="card h-100" :class="{ 'border-primary': selectedStyle === card.title }">
            <img :src="card.imgSrc" class="card-img-top" :alt="card.title">
            <div class="card-img-overlay d-flex flex-column justify-content-end">
              <button class="btn fw-bold" :class="[selectedStyle === card.title ? 'btn-primary' : 'btn-outline-light']"
                :style="{
                  color: selectedStyle === card.title ? 'white' : 'black',
                  backgroundColor: selectedStyle === card.title ? 'rgba(0, 123, 255, 1)' : 'rgba(255, 255, 255, 0.5)'
                }" @click="selectStyle(card.title)">
                {{ card.title }}
                <span v-if="selectedStyle === card.title"
                  class="position-absolute rounded-circle bg-primary d-flex align-items-center justify-content-center"
                  style="top: 50%; left: 50%; transform: translate(-50%, -50%); width: 30px; height: 30px;">
                  <i class="bi bi-check position-absolute"
                    style="top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 2rem; color: ADD8E6;">
                  </i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button v-if="showLoadMore" @click="loadMore" class="btn btn-primary mt-3">โหลดเพิ่ม</button>
    </div>
  </div>
</template>



<style>
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