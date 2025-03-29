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
    alejandra

    # Tailwind
    tailwindcss
  ];

  buildInputs = with pkgs; [
    openssl
    vips
  ];

  buildPhase = ''
    # Build the css
    tailwindcss -i ./style/input.css -o ./style/output.css

    # Wasm-bindgen nigga can't build without storing cache at HOME
    export HOME="$(pwd)/home"
    mkdir -p $HOME

    # Test wasm
    wasm-bindgen -V

    # Build wasm webiste
    trunk build --release --public-url=/
  '';

  installPhase = ''
    # Create out directory
    mkdir -p $out/www

    # Move all finished content
    mv ./dist/* $out/www
  '';

  meta = with pkgs.lib; {
    homepage = "https://floss.uz";
    description = "Website of Floss Uzbekistan community";
    license = with lib.licenses; [gpl3Only];

    platforms = with platforms; linux ++ darwin;

    maintainers = [
      {
        name = "Sokhibjon Orzikulov";
        email = "sakhib@orzklv.uz";
        handle = "orzklv";
        github = "orzklv";
        githubId = 54666588;
        keys = [
          {
            fingerprint = "00D2 7BC6 8707 0683 FBB9  137C 3C35 D3AF 0DA1 D6A8";
          }
        ];
      }
    ];
  };
}
