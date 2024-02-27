import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, h as renderHead, e as addAttribute } from '../astro_DFYM_qYh.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$FormattedDate, b as $$BaseHead, c as $$Header, d as $$Footer, S as SITE_TITLE, e as SITE_DESCRIPTION } from './__DL_fJvNW.mjs';
/* empty css                          */
import { $ as $$Image } from './generic_D9fRf_Ut.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://voidrizoma.dev");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj> <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/voidrizoma/Documents/dev/KM-/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Users/voidrizoma/Documents/dev/KM-/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const HeroImage = new Proxy({"src":"/_astro/rect12.BfT7Hu1z.png","width":731,"height":549,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/voidrizoma/Documents/dev/KM-/src/assets/rect12.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://voidrizoma.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <section class="hero-Content" data-astro-cid-j7pv25f6> <div class="hero-image" data-astro-cid-j7pv25f6> <img src="./public/Group 8.png" data-astro-cid-j7pv25f6> </div> <div class="hero-name" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Hi there! <br data-astro-cid-j7pv25f6> I'm Karen Molina</h3> </div> </section> <section class="description-Content" data-astro-cid-j7pv25f6> <div class="description-picture" data-astro-cid-j7pv25f6> <picture data-astro-cid-j7pv25f6> <source media="(max-width: 799px)" srcset="./public/rect1.png" data-astro-cid-j7pv25f6> <source media="(min-width: 800px)" srcset="./public/rect12.png" width="450px" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Image", $$Image, { "src": HeroImage, "alt": HeroImage, "data-astro-cid-j7pv25f6": true })} </picture> </div> <div class="description-content-divider" data-astro-cid-j7pv25f6> <p class="description-text" data-astro-cid-j7pv25f6>
Originally I was studying Biology 🧬 at UNAM, I shifted
						to Social Anthropology due to an interest in humanities.
						I grew up with technology, sparking curiosity in Free
						Software during college. Explored coding with Arduino,
						now a Frontend Developer since 2019. Passionate about
						digital culture, I teach STEAM workshops and contribute
						to various organizations. Currently pursuing a master's
						in Communications and Digital Humanities at Universidad
						del Claustro de Sor Juana. 👩‍💻
</p> </div> </section> <section class="skills-content" data-astro-cid-j7pv25f6> <div class="skills-divider" data-astro-cid-j7pv25f6> <div class="skills-section" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Frontend</h4> <h4 data-astro-cid-j7pv25f6>Steam Mentor</h4> <h4 data-astro-cid-j7pv25f6>Dev Mentor</h4> <h4 data-astro-cid-j7pv25f6>Speaker</h4></div> <div class="skills-section-mini" data-astro-cid-j7pv25f6> <h4 data-astro-cid-j7pv25f6>Frontend</h4> <h4 data-astro-cid-j7pv25f6>Steam Mentor</h4> <h4 data-astro-cid-j7pv25f6>Dev Mentor</h4> <h4 data-astro-cid-j7pv25f6>Speaker</h4></div> </div> <div data-astro-cid-j7pv25f6> <picture data-astro-cid-j7pv25f6> <source media="(max-width: 799px)" srcset="./public/rect2.png" width="300px" data-astro-cid-j7pv25f6> <source media="(min-width: 800px)" srcset="./public/rect2.png" width="350px" data-astro-cid-j7pv25f6> <img src="./public/rect2.png" data-astro-cid-j7pv25f6> </picture> </div> </section> <section data-astro-cid-j7pv25f6></section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })}  </body></html>`;
}, "/Users/voidrizoma/Documents/dev/KM-/src/pages/index.astro", void 0);

const $$file = "/Users/voidrizoma/Documents/dev/KM-/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
