<script lang="ts" setup>
import {
  GiftOutlined,
  HeartOutlined,
  HomeOutlined,
  MoreOutlined,
  SearchOutlined,
  ShoppingOutlined,
  TagOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
const selectedKeys = ref([])
const showSideMenu = ref(false)

interface DataItem {
  title: string
  link?: string
  description?: string
  icon?: any
}
const menus: DataItem[] = [
  {
    title: 'Home',
    link: '/',
    icon: HomeOutlined,
  },
  {
    title: 'Sales',
    link: '/sales',
    icon: GiftOutlined,
  },
  {
    title: 'Skin care',
    link: '/skin-care',
  },
  {
    title: 'Therapies',
    link: '/therapies',
  },
  {
    title: 'ILoveMyFace',
    link: '/ilovemyface',
  },
  {
    title: 'Checkout',
    icon: ShoppingOutlined,
    link: '/cart',
  },
]

const router = useRouter()
const loading = ref(false)
const searchText = ref('')
const showSearch = ref(false)
</script>

<template>
  <div class="bg-green-400">
    <a-drawer
      :width="300"
      class="mobileSidebar"
      title="Cel-Elements"
      placement="left"
      :visible="showSideMenu"
      @close="() => (showSideMenu = false)"
    >
      <template #extra> </template>
      <div class="searchBar">
        <a-input-search
          v-model:value="searchText"
          placeholder="search"
          :loading="loading"
        />
      </div>
      <a-list item-layout="horizontal" :data-source="menus">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta :description="item.description">
              <template #title>
                <a :href="item.link">{{ item.title }}</a>
              </template>
              <template #avatar>
                <component :is="item?.icon" v-if="item.icon"></component>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </a-drawer>
  </div>

  <a-layout-header theme="light">
    <div class="float-right inline-block text-right">
      <div class="mt-4">
        <!-- <a-button type="link" class="m-0 py-0 h-5">
          <search-outlined class="icon" />
        </a-button> -->
        <a-button
          type="link"
          class="m-0 py-0 h-5"
          @click="() => router.push('/account')"
        >
          <user-outlined class="icon" />
        </a-button>
        <a-button
          type="link"
          class="m-0 py-0 h-5"
          @click="() => router.push('/favorite')"
        >
          <heart-outlined class="icon" />
        </a-button>
        <a-button
          type="link"
          class="m-0 py-0 h-5"
          @click="() => router.push('/cart')"
        >
          <shopping-outlined class="icon" />
        </a-button>

        <!-- mobile menu -->
        <a-button
          type="link"
          class="py-1 h-5 float-right block md:hidden "
          @click="() => (showSideMenu = !showSideMenu)"
        >
          <more-outlined />
        </a-button>
      </div>

      <div class="hidden md:block">
        <a-button type="link" @click="() => router.push('/tips')">
          Tips &amp; advice
        </a-button>
        <a-button type="link" @click="() => router.push('/about')">
          About us
        </a-button>
      </div>
    </div>

    <div class="logo" />
    <div class="capitalize mt-0 hidden md:inline-block">
      <a-button
        type="link"
        class="capitalize mt-0"
        @click="() => router.push('/sales')"
      >
        Sales
      </a-button>
      <a-button
        type="link"
        class="capitalize"
        @click="() => router.push('/skin-care')"
      >
        Skin care
      </a-button>
      <a-button
        type="link"
        class="capitalize"
        @click="() => router.push('/therapies')"
      >
        Therapies
      </a-button>
      <a-button type="link" class="capitalize"> Spa &amp; welness </a-button>
      <a-button
        type="link"
        class="capitalize"
        @click="() => router.push('/ilovemyface')"
      >
        ILoveMyFace
      </a-button>
      <!-- <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        class="capitalize hidden md:block bg-none float-left"
        :style="{ margin: '8px 0', lineHeight: '31px' }"
      >
        <a-menu-item key="sales">Sales</a-menu-item>
        <a-menu-item key="skincare">Skin care</a-menu-item>
        <a-menu-item key="therapies">Therapies</a-menu-item>
        <a-menu-item key="spa">Spa &amp; welness</a-menu-item>
        <a-menu-item key="myface">ILoveMyFace</a-menu-item>
      </a-menu> -->
    </div>

    <div class="searchBar py-2 hidden md:block">
      <a-input-search
        v-model:value="searchText"
        placeholder="search"
        :loading="loading"
      />
    </div>
  </a-layout-header>
</template>
