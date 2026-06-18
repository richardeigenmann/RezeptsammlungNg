import { Routes } from "@angular/router";
import { AboutComponent } from "./aboutPanel/aboutPanel";
import { BuildPanelComponent } from "./buildPanel/buildPanel";
import { HomepageComponent } from "./homepage/homepage";
import { PrivacyPanelComponent } from "./privacyPanel/privacyPanel";
import { RecipeList } from "./recipeList/recipeList";

export const appRoutes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyPanelComponent },
  { path: 'build', component: BuildPanelComponent },
  { path: 'category/:categorytype/:categoryvalue', component: RecipeList },
  { path: 'recipes', component: RecipeList },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
] as const satisfies Routes;
