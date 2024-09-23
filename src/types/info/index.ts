enum DDDSatus {
  LOADING,
}

enum EnvType {
  Unknown,
  Emby,
}

class DDDInfo {
  status: DDDSatus = DDDSatus.LOADING;
  env: EnvType = EnvType.Unknown;
}
