<template>
  <main id="cont">
    <div class="cont">
      <!-- 카테고리 메뉴 -->
      <nav>
        <div class="ctg-menu">
          <ul class="list-flex">
            <li class="ctg-list-item pointer" v-for="(categoryData, i) in categoryData" :key="i" @click="lookChange()">
              <div class="ctg-thumbnail">
                <div>
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

      <!-- 카테고리 제목 -->
      <div>
        <div class="ctg-title-bx">
          <div class="ctg-title">
            <span>{{ txt }}</span>
            <!-- 전체 보기 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[0]['catNum']}`">({{ prdData.length }})</span>

            <!-- 퍼퓸 핸드 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[1]['catNum']}`">({{ newData.length }})</span>

            <!-- 튜브 핸드 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[2]['catNum']}`">({{ newData.length }})</span>

            <!-- 손 소독제 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[3]['catNum']}`">({{ newData.length }})</span>

            <!-- 샤워리바디 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[4]['catNum']}`">({{ newData.length }})</span>

            <!-- 핸드 앤 바디 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[5]['catNum']}`">({{ newData.length }})</span>

            <!-- 퍼퓸 캔들 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[6]['catNum']}`">({{ newData.length }})</span>

            <!-- 향 오브젝트 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[7]['catNum']}`">({{ newData.length }})</span>

            <!-- 토일렛 프래그런스 갯수 -->
            <span class="list-count" v-if="look == `${categoryData[8]['catNum']}`">({{ newData.length }})</span>
          </div>
        </div>

        <!-- <router-link :to="`/detail/${perfumeprdData['id']}`"> -->

        <!-- 상품 목록 -->
        <div class="prd-list">
          <!-- 전체 보기 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[0]['catNum']}`">
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
                    <div class="prd-list-price">{{ prdData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ prdData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 퍼퓸 핸드 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[1]['catNum']}`">
            <div class="prd-list-item" v-for="(newData, i) in newData" :key="i">
              <router-link :to="`/detail/${newData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${newData['img']['thumbnail']}`)"
                    :alt="`${newData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ newData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ newData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">{{ newData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ newData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 튜브 핸드 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[2]['catNum']}`">
            <div class="prd-list-item" v-for="(newData, i) in newData" :key="i">
              <router-link :to="`/detail/${newData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${newData['img']['thumbnail']}`)"
                    :alt="`${newData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ newData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ newData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">{{ newData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ newData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 손 소독제 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[3]['catNum']}`">
            <div class="prd-list-item" v-for="(newData, i) in newData" :key="i">
              <router-link :to="`/detail/${newData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${newData['img']['thumbnail']}`)"
                    :alt="`${newData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ newData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ newData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">{{ newData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ newData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 샤워리바디 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[4]['catNum']}`">
            <div class="prd-list-item" v-for="(newData, i) in newData" :key="i">
              <router-link :to="`/detail/${newData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${newData['img']['thumbnail']}`)"
                    :alt="`${newData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ newData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ newData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">{{ newData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ newData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 핸드 앤 바디 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[5]['catNum']}`">
            <div class="prd-list-item" v-for="(newData, i) in newData" :key="i">
              <router-link :to="`/detail/${newData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${newData['img']['thumbnail']}`)"
                    :alt="`${newData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ newData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ newData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">{{ newData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ newData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 퍼퓸 캔들 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[6]['catNum']}`">
            <div class="prd-list-item" v-for="(newData, i) in newData" :key="i">
              <router-link :to="`/detail/${newData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${newData['img']['thumbnail']}`)"
                    :alt="`${newData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ newData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ newData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">{{ newData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ newData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 향 오브젝트 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[7]['catNum']}`">
            <div class="prd-list-item" v-for="(newData, i) in newData" :key="i">
              <router-link :to="`/detail/${newData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${newData['img']['thumbnail']}`)"
                    :alt="`${newData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ newData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ newData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">{{ newData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ newData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- 토일렛 프래그런스 -->
          <div class="prd-list-grid" v-if="look == `${categoryData[8]['catNum']}`">
            <div class="prd-list-item" v-for="(newData, i) in newData" :key="i">
              <router-link :to="`/detail/${newData['id']}`">
                <div class="prd-list-thumbnail">
                  <img
                    class="prd-list-thumbnail-img"
                    :src="require(`../../assets/image/prd/thumbnail/${newData['img']['thumbnail']}`)"
                    :alt="`${newData['prdInfo']['name']}`"
                  />
                </div>
                <div class="prd-list-info">
                  <div class="prd-list-desc">{{ newData['prdDetail']['desc'] }}</div>
                  <div class="prd-list-name">{{ newData['prdInfo']['name'] }}</div>
                  <div class="prd-list-flex">
                    <div class="prd-list-price">{{ newData['prdInfo']['price'][0] }}원</div>
                    <div class="prd-list-size">
                      <span>+ </span>{{ newData['prdInfo']['size'].length }}<span>size</span>
                    </div>
                  </div>
                </div>
              </router-link>
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
      look: 'all',
      result: [],
      newData: [],
    };
  },
  components: {},
  props: {
    prdData: Array,
    categoryData: Array,
  },
  methods: {
    lookChange() {
      this.txt = event.currentTarget.firstChild.firstChild.nextSibling.innerHTML;

      this.result = this.categoryData.filter((a) => {
        return a['name'] == this.txt;
      });

      this.look = this.result[0]['catNum'];
      console.log(this.look);

      this.newData = this.prdData.filter((a) => {
        return a['catNum'] == this.look;
      });
    },
  },
};
</script>

<style>
@import '../../assets/css/sub/sub.css';
</style>
