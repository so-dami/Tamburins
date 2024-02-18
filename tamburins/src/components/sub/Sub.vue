<template>
  <main id="cont">
    <div class="cont">
      <!-- 카테고리 메뉴 -->
      <nav>
        <div class="ctg-menu">
          <ul class="list-flex">
            <li class="ctg-list-item pointer" v-for="(categoryData, i) in categoryData" :key="i" @click="lookChange()">
              <div class="ctg-thumbnail">
                <div class="thumbnail-img-box" :class="txt == categoryData['name'] ? 'bd-on' : ''">
                  <img
                    class="ctg-thumbnail-img"
                    :src="require(`../../assets/image/category/${categoryData['img']}`)"
                    :alt="`${categoryData['name']}`"
                  />
                </div>
                <span class="ctg-thumbnail-txt">{{ categoryData['name'] }}</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <div class="ctg-title-bx">
          <div class="ctg-title">
            <!-- 카테고리 제목 -->
            <span>{{ txt }}</span>

            <!-- 전체 보기 갯수 -->
            <span class="list-count" v-if="txt == categoryData[0]['name']">({{ prdData.length }})</span>

            <!-- 그 외 카테고리 갯수 -->
            <div class="list-count-box" v-for="(a, i) in categoryData" :key="i">
              <span class="list-count" v-if="txt == `${a['name']}` && txt != categoryData[0]['name']">
                ({{ newPrdData.length }})
              </span>
            </div>
          </div>
        </div>

        <!-- 상품 목록 -->
        <div class="prd-list">
          <!-- 전체 보기 -->
          <div class="prd-list-grid" v-if="txt == categoryData[0]['name']">
            <div class="prd-list-item" v-for="(prdData, i) in prdData" :key="i">
              <router-link :to="`/detail/${prdData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${prdData['img']['thumbnail']}`)"
                    :alt="`${prdData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ prdData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ prdData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">
                      {{
                        Number(prdData['prdInfo']['price'][0])
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                      }}원
                    </div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ prdData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 그 외 카테고리-->
          <div v-for="(b, i) in categoryData" :key="i">
            <div class="prd-list-grid" v-if="txt == b['name'] && txt != categoryData[0]['name']">
              <div class="prd-list-item" v-for="(newPrdData, i) in newPrdData" :key="i">
                <router-link :to="`/detail/${newPrdData['id']}`">
                  <div class="prd-list-thumbnail">
                    <img
                      class="prd-list-thumbnail-img"
                      :src="require(`../../assets/image/prd/thumbnail/${newPrdData['img']['thumbnail']}`)"
                      :alt="`${newPrdData['prdInfo']['name']}`"
                    />
                  </div>
                  <div class="prd-list-info">
                    <div class="prd-list-desc">{{ newPrdData['prdDetail']['desc'] }}</div>
                    <div class="prd-list-name">{{ newPrdData['prdInfo']['name'] }}</div>
                    <div class="prd-list-flex">
                      <div class="prd-list-price">
                        {{
                          Number(newPrdData['prdInfo']['price'][0])
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }}원
                      </div>
                      <div class="prd-list-size">
                        <span>+ </span>{{ newPrdData['prdInfo']['size'].length }}<span>size</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Sub',
  data() {
    return {
      txt: '전체 보기',
      newPrdData: [],
    };
  },
  components: {},
  props: {
    prdData: Array,
    categoryData: Array,
  },
  methods: {
    lookChange() {
      this.txt = event.currentTarget.firstChild.firstChild.nextSibling.innerText;
      this.newPrdData = this.prdData.filter((a) => {
        return a['cat']['cat2'] == this.txt;
      });
    },
  },
};
</script>

<style>
@import '../../assets/css/sub/sub.css';
</style>
