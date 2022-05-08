import { defineComponent, PropType, Ref } from 'vue'
import { Icon } from '@vicons/utils'

export default defineComponent({
  name: 'index',
  props: {
    search: {
      type: Object as PropType<Ref<string>>,
      required: true,
    },
  },
  setup(props, ctx) {
    const { search } = props
    return () => (
      <>
        <Icon size="28">
          {search.value === '谷歌' ? (
            <svg
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3108"
              width="200"
              height="200"
            >
              <path
                d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512"
                fill="#FBBC05"
                p-id="3109"
              ></path>
              <path
                d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88"
                fill="#EA4335"
                p-id="3110"
              ></path>
              <path
                d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776"
                fill="#34A853"
                p-id="3111"
              ></path>
              <path
                d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667"
                fill="#4285F4"
                p-id="3112"
              ></path>
            </svg>
          ) : search.value === 'DuckDuckGo' ? (
            <svg
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5377"
              width="200"
              height="200"
            >
              <path
                d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z m0 981.333333C252.8 981.333333 42.666667 771.157333 42.666667 512S252.842667 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333z m436.010667-469.333333c0 205.013333-141.525333 376.874667-332.202667 423.466667-11.52-22.229333-22.613333-43.392-31.957333-61.354667 27.52 10.624 82.346667 30.634667 94.208 26.24 16.042667-6.144 12.032-134.357333-5.973334-138.453333-14.421333-3.2-69.632 35.712-91.349333 51.584l1.450667 6.656c3.328 16.938667 6.144 42.368 1.28 53.205333-0.042667 0.170667-0.085333 0.426667-0.170667 0.554667a9.301333 9.301333 0 0 1-2.901333 3.754666c-12.117333 8.021333-46.122667 12.117333-64.128 8.021334a22.016 22.016 0 0 1-2.730667-0.853334c-29.610667 16.896-85.76 47.317333-96 41.429334-14.037333-8.021333-16.085333-114.176-14.037333-140.288 1.493333-19.626667 70.528 12.202667 104.192 28.970666 7.424-6.954667 25.685333-11.605333 41.813333-13.226666-24.32-59.264-42.24-127.018667-31.274667-175.146667 0 0.085333 0.085333 0.085333 0.085334 0.085333 15.189333 10.581333 116.48 44.8 166.826666 43.818667 50.346667-1.024 132.864-31.701333 123.861334-56.448-9.045333-24.746667-91.093333 21.76-176.725334 13.824-63.402667-5.888-74.581333-34.304-60.586666-55.04 17.664-26.069333 49.834667 4.949333 102.869333-10.922667 53.12-15.829333 127.445333-44.16 154.965333-59.605333 63.744-35.541333-26.666667-50.218667-48-40.405333-20.224 9.386667-90.581333 27.178667-123.264 34.986666 18.261333-64.682667-25.728-177.024-74.965333-226.133333-16.042667-16.042667-40.576-26.112-68.394667-31.402667-10.666667-14.677333-27.904-28.629333-52.266666-41.685333a246.272 246.272 0 0 0-153.386667-24.917333l-1.024 0.170666-1.450667 0.170667 0.170667 0.085333c-6.314667 1.194667-10.112 3.413333-15.232 4.181334 6.314667 0.682667 30.08 11.776 45.098667 17.834666-7.424 2.901333-17.578667 4.608-25.429334 7.850667a35.328 35.328 0 0 0-8.704 2.389333c-7.381333 3.413333-12.928 16-12.8 21.973334 35.84-3.669333 88.832-1.109333 127.616 10.496-27.477333 3.84-52.693333 11.008-70.869333 20.565333-0.682667 0.341333-1.28 0.768-2.048 1.194667-2.304 0.853333-4.522667 1.792-6.485333 2.816-58.325333 30.72-84.096 102.613333-68.736 188.757333 13.781333 77.824 71.04 345.088 97.706666 472.064-169.514667-59.733333-291.072-221.269333-291.072-411.264C75.989333 271.189333 271.189333 75.989333 512 75.989333S948.010667 271.189333 948.010667 512zM388.053333 408.789333a32.341333 32.341333 0 1 0 0 64.682667 32.341333 32.341333 0 0 0 0-64.682667z m14.421334 29.952a8.362667 8.362667 0 1 1 0-16.725333 8.362667 8.362667 0 0 1 0 16.725333z m201.557333-44.501333a27.733333 27.733333 0 1 0 0 55.424 27.733333 27.733333 0 0 0 0-55.466667z m12.373333 25.642667a7.168 7.168 0 1 1 0-14.336 7.168 7.168 0 0 1 0 14.336zM397.354667 347.562667s-24.362667-11.093333-48 3.84c-23.637333 14.848-22.784 30.037333-22.784 30.037333s-12.544-27.989333 20.906666-41.728c33.536-13.653333 49.92 7.850667 49.92 7.850667z m223.402666-2.218667s-17.493333-9.984-31.146666-9.813333c-27.904 0.341333-35.456 12.629333-35.456 12.629333s4.693333-29.354667 40.32-23.466667a35.84 35.84 0 0 1 26.282666 20.650667z"
                p-id="5378"
                fill="#eba410"
              ></path>
            </svg>
          ) : search.value === '必应' ? (
            <svg
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4149"
              width="200"
              height="200"
            >
              <path
                d="M512 1024c282.773333 0 512-229.226667 512-512S794.773333 0 512 0 0 229.226667 0 512s229.226667 512 512 512z"
                fill="#008373"
                p-id="4150"
              ></path>
              <path
                d="M324.266667 204.8l122.730666 43.178667v432l172.864-99.776-84.757333-39.786667-53.461333-133.077333 272.384 95.701333v139.114667L447.061333 819.2 324.266667 750.890667z"
                fill="#FFFFFF"
                p-id="4151"
              ></path>
            </svg>
          ) : search.value === '百度' ? (
            <svg
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1996"
              width="200"
              height="200"
            >
              <path
                d="M85.333333 512c0 235.648 191.018667 426.666667 426.666667 426.666667s426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333 85.333333 276.352 85.333333 512z"
                fill="#306CFF"
                p-id="1997"
              ></path>
              <path
                d="M467.114667 208.64c-9.813333-6.144-22.058667-9.813333-34.304-7.381333-8.533333 1.237333-15.914667 4.906667-24.490667 11.008-13.44 9.813333-22.016 23.296-28.16 39.210666-9.813333 25.685333-9.813333 55.082667-2.432 80.810667 4.906667 17.152 14.677333 34.261333 29.397333 45.312 9.813333 7.338667 20.778667 11.008 33.024 11.008 11.050667-1.237333 23.296-6.101333 31.829334-13.482667 11.050667-9.813333 19.626667-22.016 24.533333-35.498666a121.472 121.472 0 0 0 2.432-85.717334c-6.144-18.346667-15.914667-34.261333-31.829333-45.312z m166.528 9.770667c-7.381333-3.669333-15.914667-4.906667-24.490667-3.669334-9.813333 2.432-19.626667 8.533333-26.965333 13.482667-9.813333 9.813333-18.346667 19.584-25.685334 31.829333a96.554667 96.554667 0 0 0-14.72 36.693334c-1.194667 14.72-1.194667 29.44 1.237334 44.117333 3.669333 13.44 8.533333 26.922667 19.626666 36.693333 9.770667 9.813333 24.448 14.72 37.930667 15.957334 11.008 1.237333 23.253333-1.237333 33.066667-7.338667 11.008-6.144 19.584-15.914667 26.922666-25.728 7.338667-11.008 13.482667-24.490667 15.914667-39.168 3.669333-11.050667 4.906667-22.058667 3.669333-34.304a106.666667 106.666667 0 0 0-19.584-45.312c-7.338667-9.813333-15.914667-18.346667-26.922666-23.253333zM329.984 346.965333a59.776 59.776 0 0 0-37.973333-6.101333c-14.677333 2.432-28.16 12.245333-35.498667 24.490667-12.245333 18.346667-18.346667 37.973333-20.821333 58.752-2.474667 12.245333 0 24.490667 2.432 36.736 4.906667 17.152 13.482667 34.304 26.965333 46.506666 9.813333 9.813333 24.490667 14.72 37.973333 14.72 17.109333 0 34.261333-6.101333 46.506667-17.152 9.813333-8.533333 17.109333-20.778667 20.821333-34.261333 4.864-18.346667 6.101333-39.168 3.669334-58.794667 0-6.613333-2.218667-12.458667-4.309334-18.176-0.64-1.706667-1.28-3.413333-1.834666-5.077333-8.533333-17.152-20.821333-31.829333-37.973334-41.642667z m419.968 46.506667c-13.482667-7.296-30.592-9.770667-45.312-7.296-8.533333 1.194667-17.152 3.669333-24.490667 7.338667-11.008 7.338667-18.346667 17.152-23.253333 28.16-7.338667 15.914667-9.813333 31.829333-9.813333 48.981333 0 15.914667 0 33.066667 4.906666 47.786667 3.669333 10.965333 9.813333 22.016 19.626667 29.354666 11.008 8.533333 24.448 12.245333 37.930667 13.482667 11.008 1.194667 23.253333 0 34.304-2.474667 11.008-2.432 20.778667-9.813333 28.16-18.346666 7.338667-8.576 12.245333-20.821333 14.677333-31.829334 2.944-12.757333 2.730667-26.24 2.56-39.936-0.042667-3.413333-0.128-6.826667-0.128-10.282666 0-12.245333-4.864-23.253333-9.813333-34.304a88.021333 88.021333 0 0 0-29.354667-30.592z m-205.696 61.269333c-13.482667-6.144-29.397333-9.813333-45.312-7.338666-26.965333 2.432-52.650667 18.346667-68.565333 39.168-3.029333 3.029333-5.12 6.528-7.168 9.898666-1.28 2.133333-2.474667 4.138667-3.84 6.016-12.245333 18.346667-28.16 35.498667-44.117334 51.413334-4.266667 4.266667-8.874667 8.277333-13.44 12.245333-4.608 4.010667-9.216 7.978667-13.482666 12.245333-2.816 3.541333-6.058667 5.845333-9.258667 8.106667-2.304 1.706667-4.608 3.285333-6.656 5.376-18.346667 14.677333-36.736 31.829333-47.786667 52.650667-8.533333 13.482667-12.202667 29.397333-13.44 45.312 0 13.482667 2.432 26.922667 6.144 40.405333 3.669333 13.482667 11.008 26.922667 19.584 37.973333 14.677333 19.584 37.973333 30.592 61.226667 31.829334 28.16 1.194667 57.514667 0 85.674667-4.906667 5.12-0.938667 10.069333-2.048 14.933333-3.114667 7.850667-1.792 15.445333-3.456 23.04-4.266666a225.962667 225.962667 0 0 1 80.810667 6.144 251.349333 251.349333 0 0 0 67.370666 12.245333c23.253333 0 47.744-2.432 68.565334-13.482667 14.677333-8.533333 26.922667-20.778667 34.261333-36.693333 8.576-20.821333 14.72-44.117333 12.245333-67.370667-2.432-22.016-11.008-42.837333-26.922666-58.752-2.474667-2.474667-6.144-6.144-9.813334-8.576a829.866667 829.866667 0 0 1-58.752-53.888c-19.626667-19.626667-37.973333-40.405333-53.888-63.658666-12.245333-20.821333-29.397333-39.210667-51.413333-48.981334z m-94.293333 146.944v-57.6h39.168v206.933334H419.413333c-7.381333 0-14.72 0-22.058666-1.194667a71.509333 71.509333 0 0 1-39.168-25.728c-7.381333-8.533333-11.050667-20.821333-13.482667-31.829333a86.656 86.656 0 0 1 0-35.498667c3.669333-13.482667 11.008-25.728 20.821333-35.498667 8.533333-7.338667 18.346667-13.482667 29.397334-17.152 3.669333-1.237333 8.533333-2.474667 13.44-2.474666h41.642666z m61.226666 107.733334v-104.106667h40.405334v96.768c0 3.669333 1.237333 7.338667 3.669333 11.008a15.701333 15.701333 0 0 0 12.245333 4.906667h41.642667v-112.64h39.168v145.706666h-95.488a40.874667 40.874667 0 0 1-28.16-11.050666 41.728 41.728 0 0 1-13.482667-30.592z m-87.722666-77.909334a17.706667 17.706667 0 0 0-8.533334 2.432c-7.381333 3.712-14.72 8.576-19.626666 18.389334a69.290667 69.290667 0 0 0-3.669334 22.058666c-1.237333 8.533333 2.432 18.346667 7.338667 25.685334 6.144 8.576 17.152 13.482667 28.16 13.482666h31.829333V631.466667h-35.498666z"
                fill="#FFFFFF"
                p-id="1998"
              ></path>
            </svg>
          ) : (
            ''
          )}
        </Icon>
      </>
    )
  },
})
