import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return () => (
            <svg
                style={{
                    width: '100%',
                    height: '80%',
                    position: 'absolute',
                    transform:'scale(1.35)',
                    top: '-25%',
                    right:'3%'
                }}
                width="280"
                height="280"
                viewBox="0 0 380 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >     
                    <path d="M185.5 194.5C193.333 186.667 214.3 174.1 235.5 186.5" stroke="black" stroke-width="4">
                    </path>
                    <path d="M120 179C131.333 196.333 164 227.3 172 206.5" stroke="black" stroke-width="4"></path>
                    <path d="M266.5 173C273.5 177.167 290.4 185.4 280 189C269.6 192.6 260.333 190.5 257 189" stroke="black" stroke-width="4"></path>
                    <path d="M167.324 178.405L177.947 192.602L194.042 186.904L184.512 201.377L195.136 215.575L178.623 210.322L169.094 224.794L168.418 207.075L151.905 201.822L168 196.124L167.324 178.405Z" stroke="black" style="opacity:0.6" fill="#2a7eb4"></path>
                    <path d="M253.54 168.335L255.952 185.903L272.792 188.719L257.443 196.76L259.855 214.328L247.956 201.73L232.607 209.771L240.603 193.944L228.705 181.347L245.545 184.163L253.54 168.335Z" stroke="black" style="opacity:0.6"  fill="#2a7eb4"></path>
            </svg>
        );
    },
});
