const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareTime,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Solid: 0},
	{Player: 0},
	{TiledBackground: 0},
	{Sine: 0},
	{Sprite: 0},
	{Waypoint: 0},
	{Text: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{TimerText: 0},
	{il_570xN4849750854_t6m: 0},
	{AggressivePlayer: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{TiledBackground2: 0},
	{pngcliparthealthvideogamepixelartbarhealthgamerectangle: 0},
	{pngcliparthealthvideogamepixelartbarhealthgamerectangle2: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Button: 0},
	{health_Bar: 0},
	{agg_Bar: 0},
	{timer: 0},
	{damage: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Waypoint: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	TimerText: class extends self.ITextInstance {},
	il_570xN4849750854_t6m: class extends self.ISpriteInstance {},
	AggressivePlayer: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	pngcliparthealthvideogamepixelartbarhealthgamerectangle: class extends self.ISpriteInstance {},
	pngcliparthealthvideogamepixelartbarhealthgamerectangle2: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Button: class extends self.IButtonInstance {}
}