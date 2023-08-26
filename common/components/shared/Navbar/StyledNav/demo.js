<Main>
  <>
    <Title>
      <Link component="a" href="/">
        Monir Hossain
      </Link>
    </Title>
  </>

  <>
    {NavLinks.map((link, i) => (
      <NavLink
        key={i}
        sx={{
          borderBottom: currentRoute(i, link.href) ? ".13em solid #0abf53" : 0,
          transform: currentRoute(i, link.href) ? "scale(1.1)" : "initial",
        }}
      >
        <Link
          component={"a"}
          href={link?.href}
          style={{
            color: currentRoute(i, link.href) ? "#0abf53" : null,
            fontWeight: currentRoute(i, link.href) ? "600" : null,
            transition: "color 0.3s",
          }}
        >
          {link?.name}
        </Link>
      </NavLink>
    ))}
  </>

  {/* <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <NavDrawer onClick={() => setOpen(false)}>
          <NavDrawerLogo>
            <Image src={logo} height={"32"} width={"32"} alt="Logo" />
            <Title>
              <span>Monir</span>
              <span>Hossain</span>
            </Title>
          </NavDrawerLogo>

          <Divider />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <List>
              {NavLinks.map((item, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link href={item.href}> {item.name} </Link>
                </ListItemButton>
              ))}
            </List>
          </Box>
        </NavDrawer>
      </Drawer> */}

  {/* <SearchBox>
        <IconButton>
          <IoSearch />
        </IconButton>
      </SearchBox> */}

  <Tooltip title={themeLight ? "Dark Mode" : "Light Mode"}>
    <IconButton onClick={handleThemeToggle}>
      {themeLight ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  </Tooltip>

  {/* <MenuButton>
        <IconButton size="small" onClick={() => setOpen(true)}>
          <MenuIcon fontSize="inherit" />
        </IconButton>
      </MenuButton> */}
</Main>;
