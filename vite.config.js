import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import path from 'path'
export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  alias: {
    '@': path.join(__dirname, './src')
  },
  server: { hmr: true }
};
