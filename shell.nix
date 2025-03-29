{
  pkgs ? let
    lock = (builtins.fromJSON (builtins.readFile ./flake.lock)).nodes.nixpkgs.locked;
    nixpkgs = fetchTarball {
      url = "https://github.com/nixos/nixpkgs/archive/${lock.rev}.tar.gz";
      sha256 = lock.narHash;
    };
  in
    import nixpkgs {overlays = [];},
  ...
}:
pkgs.stdenv.mkDerivation {
  name = "floss-website";

  nativeBuildInputs = with pkgs; [
    # Typescript
    nodejs
    pnpm
    corepack
    nodePackages.typescript
    nodePackages.typescript-language-server

    # Hail the Nix
    nixd
    statix
    deadnix
    alejandra

    # Tailwind
    tailwindcss
  ];

  buildInputs = with pkgs; [
    openssl
    vips
  ];
}
