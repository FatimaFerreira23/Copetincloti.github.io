function menusystemmodel005Show(x, y, mnuname) {
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,100,30,0,0,null,0,null,new LMBranch("0",projectroot+"index.html"),null,null,projectroot+"/menusystemmodel005/menusystemitem0.gif",projectroot+"/menusystemmodel005/menusystemitem0_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",100,0,100,30,0,0,null,0,null,new LMBranch("0",projectroot+"page-2.html"),null,null,projectroot+"/menusystemmodel005/menusystemitem1.gif",projectroot+"/menusystemmodel005/menusystemitem1_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem4",200,0,100,30,0,0,null,0,null,new LMBranch("0",projectroot+"page-1.html"),null,null,projectroot+"/menusystemmodel005/menusystemitem2.gif",projectroot+"/menusystemmodel005/menusystemitem2_over.gif",null);
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem6",300,0,100,30,0,0,null,0,null,new LMBranch("0",projectroot+"page-3.html"),null,null,projectroot+"/menusystemmodel005/menusystemitem3.gif",projectroot+"/menusystemmodel005/menusystemitem3_over.gif",null);
	var MenuSystemModel005_MNU1 = new LMMenu(mnuname,x+0,y+0,400,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel005_MNU1;

	RegisterMainMenu(MenuSystemModel005_MNU1);

	ReIndexMenu(MenuSystemModel005_MNU1, index);

}
