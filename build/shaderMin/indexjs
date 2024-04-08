
const vertexShaderSource0 = `#version 300 es
#define CC_DEVICE_SUPPORT_FLOAT_TEXTURE 1
#define CC_DEVICE_MAX_VERTEX_UNIFORM_VECTORS 1024
#define CC_DEVICE_MAX_FRAGMENT_UNIFORM_VECTORS 1024
#define CC_DEVICE_CAN_BENEFIT_FROM_INPUT_ATTACHMENT 0
#define CC_PLATFORM_ANDROID_AND_WEBGL 0
#define CC_ENABLE_WEBGL_HIGHP_STRUCT_VALUES 0
#define CC_JOINT_UNIFORM_CAPACITY 256
#define CC_EFFECT_USED_VERTEX_UNIFORM_VECTORS 97
#define CC_EFFECT_USED_FRAGMENT_UNIFORM_VECTORS 127
#define HAS_SECOND_UV 0
#define USE_TWOSIDE 0
#define IS_ANISOTROPY 0
#define USE_VERTEX_COLOR 0
#define FIX_ANISOTROPIC_ROTATION_MAP 0
#define USE_NORMAL_MAP 0
#define USE_INSTANCING 0
#define CC_USE_LIGHTMAP 0
#define CC_USE_SKINNING 0
#define CC_USE_BAKED_ANIMATION 0
#define CC_RECEIVE_SHADOW 1
#define CC_USE_REFLECTION_PROBE 0
#define CC_USE_LIGHT_PROBE 0
#define CC_USE_MORPH 0
#define CC_FORWARD_ADD 0
#define CC_USE_FOG 4
#define CC_USE_ACCURATE_FOG 0
#define CC_MORPH_TARGET_COUNT 2
#define CC_MORPH_TARGET_HAS_POSITION 0
#define CC_MORPH_TARGET_HAS_NORMAL 0
#define CC_MORPH_TARGET_HAS_TANGENT 0
#define CC_MORPH_PRECOMPUTED 0
#define CC_USE_REAL_TIME_JOINT_TEXTURE 0
#define CC_DISABLE_STRUCTURE_IN_FRAGMENT_SHADER 0
#define CC_PIPELINE_TYPE 0
#define CC_FORCE_FORWARD_SHADING 0
#define CC_ENABLE_CLUSTERED_LIGHT_CULLING 0
#define CC_SUPPORT_CASCADED_SHADOW_MAP 1
#define CC_USE_IBL 2
#define CC_USE_DIFFUSEMAP 2
#define USE_ALBEDO_MAP 1
#define ALBEDO_UV v_uv
#define NORMAL_UV v_uv
#define DEFAULT_UV v_uv
#define USE_PBR_MAP 0
#define USE_OCCLUSION_MAP 0
#define USE_EMISSIVE_MAP 0
#define EMISSIVE_UV v_uv
#define USE_ANISOTROPY_MAP 0
#define USE_ALPHA_TEST 0
#define ALPHA_TEST_CHANNEL a
#define CC_SHADOWMAP_USE_LINEAR_DEPTH 0
#define CC_SHADOWMAP_FORMAT 0

precision highp float;
  #define CC_SURFACES_USE_SECOND_UV HAS_SECOND_UV
  #define CC_SURFACES_USE_TWO_SIDED USE_TWOSIDE
  #define CC_SURFACES_LIGHTING_ANISOTROPIC IS_ANISOTROPY
  #define CC_SURFACES_USE_VERTEX_COLOR USE_VERTEX_COLOR
#if IS_ANISOTROPY || USE_NORMAL_MAP
  #define CC_SURFACES_USE_TANGENT_SPACE 1
#endif
  #define CC_SURFACES_LIGHTING_ANISOTROPIC_ENVCONVOLUTION_COUNT 31
#ifndef CC_SURFACES_USE_SECOND_UV
  #define CC_SURFACES_USE_SECOND_UV 0
#endif
#ifndef CC_SURFACES_USE_TANGENT_SPACE
  #define CC_SURFACES_USE_TANGENT_SPACE 0
#endif
#ifndef CC_SURFACES_USE_VERTEX_COLOR
  #define CC_SURFACES_USE_VERTEX_COLOR 0
#endif
#ifndef CC_SURFACES_TRANSFER_LOCAL_POS
  #define CC_SURFACES_TRANSFER_LOCAL_POS 0
#endif
#ifndef CC_SURFACES_TRANSFER_CLIP_POS
  #define CC_SURFACES_TRANSFER_CLIP_POS 0
#endif
#ifndef CC_SURFACES_USE_LIGHT_MAP
  #ifdef CC_USE_LIGHTMAP
    #define CC_SURFACES_USE_LIGHT_MAP CC_USE_LIGHTMAP
  #else
    #define CC_SURFACES_USE_LIGHT_MAP 0
  #endif
#endif
#ifndef CC_SURFACES_FLIP_UV
  #define CC_SURFACES_FLIP_UV 0
#endif
#ifndef CC_SURFACES_USE_TWO_SIDED
  #define CC_SURFACES_USE_TWO_SIDED 0
#endif
#ifndef CC_SURFACES_USE_REFLECTION_DENOISE
  #define CC_SURFACES_USE_REFLECTION_DENOISE 0
#endif
#ifndef CC_SURFACES_LIGHTING_ANISOTROPIC
  #define CC_SURFACES_LIGHTING_ANISOTROPIC 0
#endif
#ifndef CC_SURFACES_LIGHTING_ANISOTROPIC_ENVCONVOLUTION_COUNT
  #define CC_SURFACES_LIGHTING_ANISOTROPIC_ENVCONVOLUTION_COUNT 0
#endif
#ifndef CC_SURFACES_USE_LEGACY_COMPATIBLE_LIGHTING
  #define CC_SURFACES_USE_LEGACY_COMPATIBLE_LIGHTING 0
#endif
#ifndef CC_SURFACES_LIGHTING_USE_FRESNEL
  #define CC_SURFACES_LIGHTING_USE_FRESNEL 0
#endif
#ifndef CC_SURFACES_LIGHTING_TRANSMIT_SPECULAR
  #define CC_SURFACES_LIGHTING_TRANSMIT_SPECULAR 0
#endif
#ifndef CC_SURFACES_LIGHTING_TRANSMIT_DIFFUSE
  #define CC_SURFACES_LIGHTING_TRANSMIT_DIFFUSE 0
#endif
#ifndef CC_SURFACES_LIGHTING_USE_SHADOWMAP_TRANSMIT
  #define CC_SURFACES_LIGHTING_USE_SHADOWMAP_TRANSMIT 0
#endif
#ifndef CC_SURFACES_LIGHTING_TRT
  #define CC_SURFACES_LIGHTING_TRT 0
#endif
#ifndef CC_SURFACES_LIGHTING_DUAL_LOBE_SPECULAR
  #define CC_SURFACES_LIGHTING_DUAL_LOBE_SPECULAR 0
#endif
#ifndef CC_SURFACES_LIGHTING_SHEEN
  #define CC_SURFACES_LIGHTING_SHEEN 0
#endif
#ifndef CC_SURFACES_LIGHTING_CLEAR_COAT
  #define CC_SURFACES_LIGHTING_CLEAR_COAT 0
#endif
#ifndef CC_SURFACES_LIGHTING_TT
  #define CC_SURFACES_LIGHTING_TT 0
#endif
#ifndef CC_SURFACES_LIGHTING_SSS
  #define CC_SURFACES_LIGHTING_SSS 0
#endif
#ifndef CC_SURFACES_LIGHTING_2ND_LAYER_SPECULAR
  #if CC_SURFACES_LIGHTING_TRT || CC_SURFACES_LIGHTING_DUAL_LOBE_SPECULAR || CC_SURFACES_LIGHTING_SHEEN || CC_SURFACES_LIGHTING_CLEAR_COAT
    #define CC_SURFACES_LIGHTING_2ND_LAYER_SPECULAR 1
  #endif
#endif
#ifndef CC_SURFACES_LIGHTING_2ND_LAYER_SPECULAR
  #define CC_SURFACES_LIGHTING_2ND_LAYER_SPECULAR 0
#endif
#ifndef CC_SURFACES_LIGHTING_USE_MULTIPLE_LAYER_BLEND
  #if CC_SURFACES_LIGHTING_CLEAR_COAT
    #define CC_SURFACES_LIGHTING_USE_MULTIPLE_LAYER_BLEND 1
  #endif
#endif
#ifndef CC_SURFACES_LIGHTING_USE_MULTIPLE_LAYER_BLEND
  #define CC_SURFACES_LIGHTING_USE_MULTIPLE_LAYER_BLEND 0
#endif
#ifndef CC_SURFACES_ENABLE_DEBUG_VIEW
  #define CC_SURFACES_ENABLE_DEBUG_VIEW 1
#endif
#define CC_USE_SURFACE_SHADER 1
in vec3 a_position;
in vec3 a_normal;
in vec2 a_texCoord;
#if CC_SURFACES_USE_TANGENT_SPACE
  in vec4 a_tangent;
#endif
#if CC_SURFACES_USE_VERTEX_COLOR
  in vec4 a_color;
#endif
#if CC_SURFACES_USE_SECOND_UV || CC_USE_LIGHTMAP
  in vec2 a_texCoord1;
#endif
#if CC_USE_SKINNING
    in vec4 a_joints;
  in vec4 a_weights;
#endif
#if USE_INSTANCING
  #if CC_USE_BAKED_ANIMATION
    in highp vec4 a_jointAnimInfo;
  #endif
  in vec4 a_matWorld0;
  in vec4 a_matWorld1;
  in vec4 a_matWorld2;
  #if CC_USE_LIGHTMAP
    in vec4 a_lightingMapUVParam;
  #endif
  #if CC_RECEIVE_SHADOW || CC_USE_REFLECTION_PROBE
    in vec4 a_localShadowBiasAndProbeId;
  #endif
  #if CC_USE_REFLECTION_PROBE
    in vec4 a_reflectionProbeData;
  #endif
  #if CC_USE_LIGHT_PROBE
    in vec4 a_sh_linear_const_r;
    in vec4 a_sh_linear_const_g;
    in vec4 a_sh_linear_const_b;
  #endif
#endif
#if CC_USE_MORPH
    in float a_vertexId;
#endif
#define QUATER_PI         0.78539816340
#define HALF_PI           1.57079632679
#define PI                3.14159265359
#define PI2               6.28318530718
#define PI4               12.5663706144
#define INV_QUATER_PI     1.27323954474
#define INV_HALF_PI       0.63661977237
#define INV_PI            0.31830988618
#define INV_PI2           0.15915494309
#define INV_PI4           0.07957747155
#define EPSILON           1e-6
#define EPSILON_LOWP      1e-4
#define LOG2              1.442695
#define EXP_VALUE         2.71828183
#define FP_MAX            65504.0
#define FP_SCALE          0.0009765625
#define FP_SCALE_INV      1024.0
#define GRAY_VECTOR       vec3(0.299, 0.587, 0.114)
#define LIGHT_MAP_TYPE_DISABLED 0
#define LIGHT_MAP_TYPE_ALL_IN_ONE 1
#define LIGHT_MAP_TYPE_INDIRECT_OCCLUSION 2
#define REFLECTION_PROBE_TYPE_NONE 0
#define REFLECTION_PROBE_TYPE_CUBE 1
#define REFLECTION_PROBE_TYPE_PLANAR 2
#define REFLECTION_PROBE_TYPE_BLEND 3
#define REFLECTION_PROBE_TYPE_BLEND_AND_SKYBOX 4
#define LIGHT_TYPE_DIRECTIONAL 0.0
#define LIGHT_TYPE_SPHERE 1.0
#define LIGHT_TYPE_SPOT 2.0
#define LIGHT_TYPE_POINT 3.0
#define LIGHT_TYPE_RANGED_DIRECTIONAL 4.0
#define IS_DIRECTIONAL_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_DIRECTIONAL)) < EPSILON_LOWP)
#define IS_SPHERE_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_SPHERE)) < EPSILON_LOWP)
#define IS_SPOT_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_SPOT)) < EPSILON_LOWP)
#define IS_POINT_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_POINT)) < EPSILON_LOWP)
#define IS_RANGED_DIRECTIONAL_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_RANGED_DIRECTIONAL)) < EPSILON_LOWP)
#define TONE_MAPPING_ACES 0
#define TONE_MAPPING_LINEAR 1
#define SURFACES_MAX_TRANSMIT_DEPTH_VALUE 999999.0
#ifndef CC_SURFACES_DEBUG_VIEW_SINGLE
  #define CC_SURFACES_DEBUG_VIEW_SINGLE 1
#endif
#ifndef CC_SURFACES_DEBUG_VIEW_COMPOSITE_AND_MISC
  #define CC_SURFACES_DEBUG_VIEW_COMPOSITE_AND_MISC 2
#endif
out highp vec3 v_worldPos;
out vec4 v_normal;
out vec2 v_uv;
#if CC_SURFACES_USE_VERTEX_COLOR
  out lowp vec4 v_color;
#endif
#if CC_SURFACES_USE_TANGENT_SPACE
  out mediump vec4 v_tangent;
#endif
#if CC_SURFACES_USE_SECOND_UV
  out mediump vec2 v_uv1;
#endif
#if CC_USE_LIGHTMAP && !CC_FORWARD_ADD
  out mediump vec3 v_luv;
#endif
#if CC_RECEIVE_SHADOW || CC_USE_REFLECTION_PROBE
  out mediump vec4 v_shadowBiasAndProbeId;
#endif
#if CC_USE_REFLECTION_PROBE && USE_INSTANCING
  out mediump vec4 v_reflectionProbeData;
#endif
#if CC_USE_FOG != 4 && !CC_USE_ACCURATE_FOG
  out mediump float v_fogFactor;
#endif
#if CC_SURFACES_TRANSFER_LOCAL_POS
  out highp vec4 v_localPos;
#endif
#if CC_SURFACES_TRANSFER_CLIP_POS
  out highp vec4 v_clipPos;
#endif
#if CC_USE_LIGHT_PROBE
  #if USE_INSTANCING
    out mediump vec4 v_sh_linear_const_r;
    out mediump vec4 v_sh_linear_const_g;
    out mediump vec4 v_sh_linear_const_b;
  #endif
#endif
#define VSOutput_worldPos v_worldPos
#define VSOutput_worldNormal v_normal.xyz
#define VSOutput_faceSideSign v_normal.w
#define VSOutput_texcoord v_uv
#if CC_SURFACES_USE_VERTEX_COLOR
  #define VSOutput_vertexColor v_color
#endif
#if CC_SURFACES_USE_TANGENT_SPACE
  #define VSOutput_worldTangent v_tangent.xyz
  #define VSOutput_mirrorNormal v_tangent.w
#endif
#if CC_SURFACES_USE_SECOND_UV
  #define VSOutput_texcoord1 v_uv1
#endif
#if CC_USE_LIGHTMAP && !CC_FORWARD_ADD
  #define VSOutput_lightMapUV v_luv
#endif
#if CC_RECEIVE_SHADOW
  #define VSOutput_shadowBias v_shadowBiasAndProbeId.xy
#endif
#if CC_USE_REFLECTION_PROBE
  #define VSOutput_reflectionProbeId v_shadowBiasAndProbeId.z
  #if CC_USE_REFLECTION_PROBE == REFLECTION_PROBE_TYPE_BLEND || CC_USE_REFLECTION_PROBE == REFLECTION_PROBE_TYPE_BLEND_AND_SKYBOX
    #define VSOutput_reflectionProbeBlendId v_shadowBiasAndProbeId.w
  #endif
  #if USE_INSTANCING
    #define VSOutput_reflectionProbeData v_reflectionProbeData
  #endif
#endif
#if CC_USE_FOG != 4 && !CC_USE_ACCURATE_FOG
  #define VSOutput_fogFactor v_fogFactor
#endif
#if CC_SURFACES_TRANSFER_LOCAL_POS
  #define VSOutput_localPos v_localPos
#endif
#if CC_SURFACES_TRANSFER_CLIP_POS
  #define VSOutput_clipPos v_clipPos
#endif
struct SurfacesStandardVertexIntermediate
{
  highp vec4 position;
  vec3 normal;
#if CC_SURFACES_USE_TANGENT_SPACE
  vec4 tangent;
#endif
#if CC_SURFACES_USE_VERTEX_COLOR
  vec4 color;
#endif
  vec2 texCoord;
#if CC_SURFACES_USE_SECOND_UV
  vec2 texCoord1;
#endif
  highp vec4 clipPos;
  highp vec3 worldPos;
  vec4 worldNormal;
  #if CC_SURFACES_USE_TANGENT_SPACE
    vec3 worldTangent, worldBinormal;
  #endif
#if CC_RECEIVE_SHADOW || CC_USE_REFLECTION_PROBE
  vec4 shadowBiasAndProbeId;
#endif
#if CC_USE_FOG != 4 && !CC_USE_ACCURATE_FOG
  float fogFactor;
#endif
#if CC_USE_LIGHTMAP && !CC_FORWARD_ADD
  vec3 lightmapUV;
#endif
};
#if CC_USE_MORPH
    int getVertexId() {
      return int(a_vertexId);
    }
#endif
layout(std140) uniform CCGlobal {
  highp   vec4 cc_time;
  mediump vec4 cc_screenSize;
  mediump vec4 cc_nativeSize;
  mediump vec4 cc_probeInfo;
  mediump vec4 cc_debug_view_mode;
};
layout(std140) uniform CCCamera {
  highp   mat4 cc_matView;
  highp   mat4 cc_matViewInv;
  highp   mat4 cc_matProj;
  highp   mat4 cc_matProjInv;
  highp   mat4 cc_matViewProj;
  highp   mat4 cc_matViewProjInv;
  highp   vec4 cc_cameraPos;
  mediump vec4 cc_surfaceTransform;
  mediump vec4 cc_screenScale;
  mediump vec4 cc_exposure;
  mediump vec4 cc_mainLitDir;
  mediump vec4 cc_mainLitColor;
  mediump vec4 cc_ambientSky;
  mediump vec4 cc_ambientGround;
  mediump vec4 cc_fogColor;
  mediump vec4 cc_fogBase;
  mediump vec4 cc_fogAdd;
  mediump vec4 cc_nearFar;
  mediump vec4 cc_viewPort;
};
layout(std140) uniform CCShadow {
  highp mat4 cc_matLightView;
  highp mat4 cc_matLightViewProj;
  highp vec4 cc_shadowInvProjDepthInfo;
  highp vec4 cc_shadowProjDepthInfo;
  highp vec4 cc_shadowProjInfo;
  mediump vec4 cc_shadowNFLSInfo;
  mediump vec4 cc_shadowWHPBInfo;
  mediump vec4 cc_shadowLPNNInfo;
  lowp vec4 cc_shadowColor;
  mediump vec4 cc_planarNDInfo;
};
highp float decode32 (highp vec4 rgba) {
  rgba = rgba * 255.0;
  highp float Sign = 1.0 - (step(128.0, (rgba[3]) + 0.5)) * 2.0;
  highp float Exponent = 2.0 * (mod(float(int((rgba[3]) + 0.5)), 128.0)) + (step(128.0, (rgba[2]) + 0.5)) - 127.0;
  highp float Mantissa = (mod(float(int((rgba[2]) + 0.5)), 128.0)) * 65536.0 + rgba[1] * 256.0 + rgba[0] + 8388608.0;
  return Sign * exp2(Exponent - 23.0) * Mantissa;
}
#if !USE_INSTANCING
  layout(std140) uniform CCLocal {
    highp mat4 cc_matWorld;
    highp mat4 cc_matWorldIT;
    highp vec4 cc_lightingMapUVParam;
    highp vec4 cc_localShadowBias;
    highp vec4 cc_reflectionProbeData1;
    highp vec4 cc_reflectionProbeData2;
    highp vec4 cc_reflectionProbeBlendData1;
    highp vec4 cc_reflectionProbeBlendData2;
  };
#endif
void CCGetWorldMatrixFull(out mat4 matWorld, out mat4 matWorldIT)
{
  #if USE_INSTANCING
    matWorld = mat4(
      vec4(a_matWorld0.xyz, 0.0),
      vec4(a_matWorld1.xyz, 0.0),
      vec4(a_matWorld2.xyz, 0.0),
      vec4(a_matWorld0.w, a_matWorld1.w, a_matWorld2.w, 1.0)
    );
    vec3 scale = 1.0 / vec3(length(a_matWorld0.xyz), length(a_matWorld1.xyz), length(a_matWorld2.xyz));
    vec3 scale2 = scale * scale;
    matWorldIT = mat4(
      vec4(a_matWorld0.xyz * scale2.x, 0.0),
      vec4(a_matWorld1.xyz * scale2.y, 0.0),
      vec4(a_matWorld2.xyz * scale2.z, 0.0),
      vec4(0.0, 0.0, 0.0, 1.0)
    );
  #else
    matWorld = cc_matWorld;
    matWorldIT = cc_matWorldIT;
  #endif
}
#if CC_USE_MORPH
  layout(std140) uniform CCMorph {
    vec4 cc_displacementWeights[15];
    vec4 cc_displacementTextureInfo;
  };
  #if CC_MORPH_TARGET_HAS_POSITION
    uniform sampler2D cc_PositionDisplacements;
  #endif
  #if CC_MORPH_TARGET_HAS_NORMAL
    uniform sampler2D cc_NormalDisplacements;
  #endif
  #if CC_MORPH_TARGET_HAS_TANGENT
    uniform sampler2D cc_TangentDisplacements;
  #endif
  vec2 getPixelLocation(vec2 textureResolution, int pixelIndex) {
    float pixelIndexF = float(pixelIndex);
    float x = mod(pixelIndexF, textureResolution.x);
    float y = floor(pixelIndexF / textureResolution.x);
    return vec2(x, y);
  }
  vec2 getPixelCoordFromLocation(vec2 location, vec2 textureResolution) {
    return (vec2(location.x, location.y) + .5) / textureResolution;
  }
  #if CC_DEVICE_SUPPORT_FLOAT_TEXTURE
      vec4 fetchVec3ArrayFromTexture(sampler2D tex, int pixelIndex) {
        ivec2 texSize = textureSize(tex, 0);
        return texelFetch(tex, ivec2(pixelIndex % texSize.x, pixelIndex / texSize.x), 0);
      }
  #else
    vec4 fetchVec3ArrayFromTexture(sampler2D tex, int elementIndex) {
      int pixelIndex = elementIndex * 4;
      vec2 location = getPixelLocation(cc_displacementTextureInfo.xy, pixelIndex);
      vec2 x = getPixelCoordFromLocation(location + vec2(0.0, 0.0), cc_displacementTextureInfo.xy);
      vec2 y = getPixelCoordFromLocation(location + vec2(1.0, 0.0), cc_displacementTextureInfo.xy);
      vec2 z = getPixelCoordFromLocation(location + vec2(2.0, 0.0), cc_displacementTextureInfo.xy);
      return vec4(
        decode32(texture(tex, x)),
        decode32(texture(tex, y)),
        decode32(texture(tex, z)),
        1.0
      );
    }
  #endif
  float getDisplacementWeight(int index) {
    int quot = index / 4;
    int remainder = index - quot * 4;
    if (remainder == 0) {
      return cc_displacementWeights[quot].x;
    } else if (remainder == 1) {
      return cc_displacementWeights[quot].y;
    } else if (remainder == 2) {
      return cc_displacementWeights[quot].z;
    } else {
      return cc_displacementWeights[quot].w;
    }
  }
  vec3 getVec3DisplacementFromTexture(sampler2D tex, int vertexIndex) {
  #if CC_MORPH_PRECOMPUTED
    return fetchVec3ArrayFromTexture(tex, vertexIndex).rgb;
  #else
    vec3 result = vec3(0, 0, 0);
    int nVertices = int(cc_displacementTextureInfo.z);
    for (int iTarget = 0; iTarget < CC_MORPH_TARGET_COUNT; ++iTarget) {
      result += (fetchVec3ArrayFromTexture(tex, nVertices * iTarget + vertexIndex).rgb * getDisplacementWeight(iTarget));
    }
    return result;
  #endif
  }
  #if CC_MORPH_TARGET_HAS_POSITION
  vec3 getPositionDisplacement(int vertexId) {
      return getVec3DisplacementFromTexture(cc_PositionDisplacements, vertexId);
  }
  #endif
  #if CC_MORPH_TARGET_HAS_NORMAL
  vec3 getNormalDisplacement(int vertexId) {
      return getVec3DisplacementFromTexture(cc_NormalDisplacements, vertexId);
  }
  #endif
  #if CC_MORPH_TARGET_HAS_TANGENT
  vec3 getTangentDisplacement(int vertexId) {
      return getVec3DisplacementFromTexture(cc_TangentDisplacements, vertexId);
  }
  #endif
  void applyMorph (inout vec4 position, inout vec3 normal, inout vec4 tangent) {
    int vertexId = getVertexId();
  #if CC_MORPH_TARGET_HAS_POSITION
    position.xyz = position.xyz + getPositionDisplacement(vertexId);
  #endif
  #if CC_MORPH_TARGET_HAS_NORMAL
    normal.xyz = normal.xyz + getNormalDisplacement(vertexId);
  #endif
  #if CC_MORPH_TARGET_HAS_TANGENT
    tangent.xyz = tangent.xyz + getTangentDisplacement(vertexId);
  #endif
  }
  void applyMorph (inout vec4 position) {
  #if CC_MORPH_TARGET_HAS_POSITION
    position.xyz = position.xyz + getPositionDisplacement(getVertexId());
  #endif
  }
#endif
#if CC_USE_SKINNING
  #if CC_USE_BAKED_ANIMATION
    layout(std140) uniform CCSkinningTexture {
      highp vec4 cc_jointTextureInfo;
    };
    layout(std140) uniform CCSkinningAnimation {
      highp vec4 cc_jointAnimInfo;
    };
    uniform highp sampler2D cc_jointTexture;
    void CCGetJointTextureCoords(float pixelsPerJoint, float jointIdx, out highp float x, out highp float y, out highp float invSize)
    {
      #if USE_INSTANCING
        highp float temp = pixelsPerJoint * (a_jointAnimInfo.x * a_jointAnimInfo.y + jointIdx) + a_jointAnimInfo.z;
      #else
        highp float temp = pixelsPerJoint * (cc_jointAnimInfo.x * cc_jointTextureInfo.y + jointIdx) + cc_jointTextureInfo.z;
      #endif
      invSize = cc_jointTextureInfo.w;
      highp float tempY = floor(temp * invSize);
      x = floor(temp - tempY * cc_jointTextureInfo.x);
      y = (tempY + 0.5) * invSize;
    }
  #else
    #if CC_USE_REAL_TIME_JOINT_TEXTURE
      uniform highp sampler2D cc_realtimeJoint;
    #else
      layout(std140) uniform CCSkinning {
        highp vec4 cc_joints[CC_JOINT_UNIFORM_CAPACITY * 3];
      };
    #endif
  #endif
  #if CC_USE_BAKED_ANIMATION
    #if CC_DEVICE_SUPPORT_FLOAT_TEXTURE
      mat4 getJointMatrix (float i) {
        highp float x, y, invSize;
        CCGetJointTextureCoords(3.0, i, x, y, invSize);
        vec4 v1 = texture(cc_jointTexture, vec2((x + 0.5) * invSize, y));
        vec4 v2 = texture(cc_jointTexture, vec2((x + 1.5) * invSize, y));
        vec4 v3 = texture(cc_jointTexture, vec2((x + 2.5) * invSize, y));
        return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));
      }
    #else
      mat4 getJointMatrix (float i) {
        highp float x, y, invSize;
        CCGetJointTextureCoords(12.0, i, x, y, invSize);
        vec4 v1 = vec4(
          decode32(texture(cc_jointTexture, vec2((x + 0.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 1.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 2.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 3.5) * invSize, y)))
        );
        vec4 v2 = vec4(
          decode32(texture(cc_jointTexture, vec2((x + 4.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 5.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 6.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 7.5) * invSize, y)))
        );
        vec4 v3 = vec4(
          decode32(texture(cc_jointTexture, vec2((x + 8.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 9.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 10.5) * invSize, y))),
          decode32(texture(cc_jointTexture, vec2((x + 11.5) * invSize, y)))
        );
        return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));
      }
    #endif
  #else
    #if CC_USE_REAL_TIME_JOINT_TEXTURE
      #if CC_DEVICE_SUPPORT_FLOAT_TEXTURE
        mat4 getJointMatrix (float i) {
          float x = i;
          vec4 v1 = texture(cc_realtimeJoint, vec2( x / 256.0, 0.5 / 3.0));
          vec4 v2 = texture(cc_realtimeJoint, vec2( x / 256.0, 1.5 / 3.0));
          vec4 v3 = texture(cc_realtimeJoint, vec2( x / 256.0, 2.5 / 3.0));
          return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));
        }
      #else
        mat4 getJointMatrix (float i) {
         float x = 4.0 * i;
          vec4 v1 = vec4(
            decode32(texture(cc_realtimeJoint, vec2((x + 0.5)/ 1024.0, 0.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 1.5)/ 1024.0, 0.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 2.5)/ 1024.0, 0.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 3.5)/ 1024.0, 0.5 / 3.0)))
          );
          vec4 v2 = vec4(
            decode32(texture(cc_realtimeJoint, vec2((x + 0.5)/ 1024.0, 1.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 1.5)/ 1024.0, 1.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 2.5)/ 1024.0, 1.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 3.5)/ 1024.0, 1.5 / 3.0)))
          );
          vec4 v3 = vec4(
            decode32(texture(cc_realtimeJoint, vec2((x + 0.5)/ 1024.0, 2.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 1.5)/ 1024.0, 2.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 2.5)/ 1024.0, 2.5 / 3.0))),
            decode32(texture(cc_realtimeJoint, vec2((x + 3.5)/ 1024.0, 2.5 / 3.0)))
          );
          return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));
        }
      #endif
    #else
      mat4 getJointMatrix (float i) {
        int idx = int(i);
        vec4 v1 = cc_joints[idx * 3];
        vec4 v2 = cc_joints[idx * 3 + 1];
        vec4 v3 = cc_joints[idx * 3 + 2];
        return mat4(vec4(v1.xyz, 0.0), vec4(v2.xyz, 0.0), vec4(v3.xyz, 0.0), vec4(v1.w, v2.w, v3.w, 1.0));
      }
    #endif
  #endif
  mat4 skinMatrix () {
    vec4 joints = vec4(a_joints);
    return getJointMatrix(joints.x) * a_weights.x
         + getJointMatrix(joints.y) * a_weights.y
         + getJointMatrix(joints.z) * a_weights.z
         + getJointMatrix(joints.w) * a_weights.w;
  }
  void CCSkin (inout vec4 position) {
    mat4 m = skinMatrix();
    position = m * position;
  }
  void CCSkin (inout vec4 position, inout vec3 normal, inout vec4 tangent) {
    mat4 m = skinMatrix();
    position = m * position;
    normal = (m * vec4(normal, 0.0)).xyz;
    tangent.xyz = (m * vec4(tangent.xyz, 0.0)).xyz;
  }
#endif
#if CC_USE_FOG != 4 && !CC_USE_ACCURATE_FOG
  #if CC_USE_FOG != 4
  #endif
#endif
layout(std140) uniform Constants {
  vec4 tilingOffset;
  vec4 albedo;
  vec4 albedoScaleAndCutoff;
  vec4 pbrParams;
  vec4 emissive;
  vec4 emissiveScaleParam;
  vec4 anisotropyParam;
};
#define CC_SURFACES_VERTEX_MODIFY_SHADOW_BIAS
#define CC_SURFACES_VERTEX_MODIFY_UV
void SurfacesVertexModifyUV(inout SurfacesStandardVertexIntermediate In)
{
  In.texCoord = In.texCoord * tilingOffset.xy + tilingOffset.zw;
#if CC_SURFACES_USE_SECOND_UV
  In.texCoord1 = In.texCoord1 * tilingOffset.xy + tilingOffset.zw;
#endif
}
#ifndef CC_SURFACES_VERTEX_MODIFY_LOCAL_POS
vec3 SurfacesVertexModifyLocalPos(in SurfacesStandardVertexIntermediate In)
{
  return vec3(In.position.xyz);
}
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_LOCAL_NORMAL
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_LOCAL_TANGENT
  #if CC_SURFACES_USE_TANGENT_SPACE
  #endif
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_LOCAL_SHARED_DATA
void SurfacesVertexModifyLocalSharedData(inout SurfacesStandardVertexIntermediate In)
{
}
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_WORLD_POS
vec3 SurfacesVertexModifyWorldPos(in SurfacesStandardVertexIntermediate In)
{
  return In.worldPos;
}
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_CLIP_POS
vec4 SurfacesVertexModifyClipPos(in SurfacesStandardVertexIntermediate In)
{
  return In.clipPos;
}
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_UV
void SurfacesVertexModifyUV(inout SurfacesStandardVertexIntermediate In)
{
}
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_WORLD_NORMAL
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_SHADOW_BIAS
#endif
#ifndef CC_SURFACES_VERTEX_MODIFY_SHARED_DATA
void SurfacesVertexModifySharedData(inout SurfacesStandardVertexIntermediate In)
{
}
#endif
void CCSurfacesVertexInput(out SurfacesStandardVertexIntermediate In)
{
  In.position = vec4(a_position, 1.0);
  In.normal = a_normal;
#if CC_SURFACES_USE_TANGENT_SPACE
  In.tangent = a_tangent;
#endif
#if CC_SURFACES_USE_VERTEX_COLOR
  In.color = a_color;
#endif
  In.texCoord = a_texCoord;
#if CC_SURFACES_USE_SECOND_UV
  In.texCoord1 = a_texCoord1;
#endif
}
void CCSurfacesVertexOutput(in SurfacesStandardVertexIntermediate In)
{
  gl_Position = In.clipPos;
  VSOutput_worldNormal = In.worldNormal.xyz;
  VSOutput_faceSideSign = In.worldNormal.w;
  VSOutput_worldPos = In.worldPos;
#if CC_SURFACES_USE_TANGENT_SPACE
  VSOutput_worldTangent = In.worldTangent.xyz;
  VSOutput_mirrorNormal = In.tangent.w > 0.0 ? 1.0 : -1.0;
#endif
#if CC_SURFACES_USE_VERTEX_COLOR
  VSOutput_vertexColor = In.color;
#endif
  VSOutput_texcoord = In.texCoord;
#if CC_SURFACES_USE_SECOND_UV
  VSOutput_texcoord1 = In.texCoord1;
#endif
#if CC_USE_FOG != 4 && !CC_USE_ACCURATE_FOG
  VSOutput_fogFactor = In.fogFactor;
#endif
#if CC_RECEIVE_SHADOW
  VSOutput_shadowBias = In.shadowBiasAndProbeId.xy;
#endif
#if CC_USE_REFLECTION_PROBE
  VSOutput_reflectionProbeId = In.shadowBiasAndProbeId.z;
  #if CC_USE_REFLECTION_PROBE == REFLECTION_PROBE_TYPE_BLEND || CC_USE_REFLECTION_PROBE == REFLECTION_PROBE_TYPE_BLEND_AND_SKYBOX
    VSOutput_reflectionProbeBlendId = In.shadowBiasAndProbeId.w;
  #endif
  #if USE_INSTANCING
    v_reflectionProbeData = a_reflectionProbeData;
  #endif
#endif
#if CC_USE_LIGHTMAP && !CC_FORWARD_ADD
  VSOutput_lightMapUV = In.lightmapUV;
#endif
#if CC_SURFACES_TRANSFER_LOCAL_POS
  VSOutput_localPos = In.position;
#endif
#if CC_SURFACES_TRANSFER_CLIP_POS
  VSOutput_clipPos = In.clipPos;
#endif
#if CC_USE_LIGHT_PROBE
  #if USE_INSTANCING
    v_sh_linear_const_r = a_sh_linear_const_r;
    v_sh_linear_const_g = a_sh_linear_const_g;
    v_sh_linear_const_b = a_sh_linear_const_b;
  #endif
#endif
}
void CCSurfacesVertexAnimation(inout SurfacesStandardVertexIntermediate In)
{
vec4 temp = vec4(0.0);
#if CC_USE_MORPH
  #if CC_SURFACES_USE_TANGENT_SPACE
    applyMorph(In.position, In.normal, In.tangent);
  #else
    applyMorph(In.position, In.normal, temp);
  #endif
#endif
#if CC_USE_SKINNING
  #if CC_SURFACES_USE_TANGENT_SPACE
    CCSkin(In.position, In.normal, In.tangent);
  #else
    CCSkin(In.position, In.normal, temp);
  #endif
#endif
}
void CCSurfacesVertexWorldTransform(inout SurfacesStandardVertexIntermediate In)
{
    mat4 matWorld, matWorldIT;
    CCGetWorldMatrixFull(matWorld, matWorldIT);
    In.worldPos = (matWorld * In.position).xyz;
    In.worldNormal.xyz = normalize((matWorldIT * vec4(In.normal.xyz, 0.0)).xyz);
    #if CC_SURFACES_USE_TANGENT_SPACE
      In.worldTangent = normalize((matWorld * vec4(In.tangent.xyz, 0.0)).xyz);
      In.worldBinormal = cross(In.worldNormal.xyz, In.worldTangent) * In.tangent.w;
    #endif
}
void CCSurfacesVertexTransformUV(inout SurfacesStandardVertexIntermediate In)
{
  #if CC_SURFACES_FLIP_UV
    In.texCoord = cc_cameraPos.w > 1.0 ? vec2(In.texCoord.x, 1.0 - In.texCoord.y) : In.texCoord;
    #if CC_SURFACES_USE_SECOND_UV
      In.texCoord1 = cc_cameraPos.w > 1.0 ? vec2(In.texCoord1.x, 1.0 - In.texCoord1.y) : In.texCoord1;
    #endif
  #endif
}
out highp vec2 v_clip_depth;
void main()
{
  SurfacesStandardVertexIntermediate In;
  CCSurfacesVertexInput(In);
  CCSurfacesVertexAnimation(In);
  In.position.xyz = SurfacesVertexModifyLocalPos(In);
  SurfacesVertexModifyLocalSharedData(In);
  CCSurfacesVertexWorldTransform(In);
  In.worldPos = SurfacesVertexModifyWorldPos(In);
  In.clipPos = cc_matLightViewProj * vec4(In.worldPos, 1.0);
  In.clipPos = SurfacesVertexModifyClipPos(In);
  SurfacesVertexModifyUV(In);
  SurfacesVertexModifySharedData(In);
  CCSurfacesVertexTransformUV(In);
  CCSurfacesVertexOutput(In);
  v_clip_depth = In.clipPos.zw;
}`;

const fragmentShaderSource0 = `#version 300 es
#define CC_DEVICE_SUPPORT_FLOAT_TEXTURE 1
#define CC_DEVICE_MAX_VERTEX_UNIFORM_VECTORS 1024
#define CC_DEVICE_MAX_FRAGMENT_UNIFORM_VECTORS 1024
#define CC_DEVICE_CAN_BENEFIT_FROM_INPUT_ATTACHMENT 0
#define CC_PLATFORM_ANDROID_AND_WEBGL 0
#define CC_ENABLE_WEBGL_HIGHP_STRUCT_VALUES 0
#define CC_JOINT_UNIFORM_CAPACITY 256
#define CC_EFFECT_USED_VERTEX_UNIFORM_VECTORS 97
#define CC_EFFECT_USED_FRAGMENT_UNIFORM_VECTORS 127
#define HAS_SECOND_UV 0
#define USE_TWOSIDE 0
#define IS_ANISOTROPY 0
#define USE_VERTEX_COLOR 0
#define FIX_ANISOTROPIC_ROTATION_MAP 0
#define USE_NORMAL_MAP 0
#define USE_INSTANCING 0
#define CC_USE_LIGHTMAP 0
#define CC_USE_SKINNING 0
#define CC_USE_BAKED_ANIMATION 0
#define CC_RECEIVE_SHADOW 1
#define CC_USE_REFLECTION_PROBE 0
#define CC_USE_LIGHT_PROBE 0
#define CC_USE_MORPH 0
#define CC_FORWARD_ADD 0
#define CC_USE_FOG 4
#define CC_USE_ACCURATE_FOG 0
#define CC_MORPH_TARGET_COUNT 2
#define CC_MORPH_TARGET_HAS_POSITION 0
#define CC_MORPH_TARGET_HAS_NORMAL 0
#define CC_MORPH_TARGET_HAS_TANGENT 0
#define CC_MORPH_PRECOMPUTED 0
#define CC_USE_REAL_TIME_JOINT_TEXTURE 0
#define CC_DISABLE_STRUCTURE_IN_FRAGMENT_SHADER 0
#define CC_PIPELINE_TYPE 0
#define CC_FORCE_FORWARD_SHADING 0
#define CC_ENABLE_CLUSTERED_LIGHT_CULLING 0
#define CC_SUPPORT_CASCADED_SHADOW_MAP 1
#define CC_USE_IBL 2
#define CC_USE_DIFFUSEMAP 2
#define USE_ALBEDO_MAP 1
#define ALBEDO_UV v_uv
#define NORMAL_UV v_uv
#define DEFAULT_UV v_uv
#define USE_PBR_MAP 0
#define USE_OCCLUSION_MAP 0
#define USE_EMISSIVE_MAP 0
#define EMISSIVE_UV v_uv
#define USE_ANISOTROPY_MAP 0
#define USE_ALPHA_TEST 0
#define ALPHA_TEST_CHANNEL a
#define CC_SHADOWMAP_USE_LINEAR_DEPTH 0
#define CC_SHADOWMAP_FORMAT 0

precision highp float;
  #define CC_SURFACES_USE_SECOND_UV HAS_SECOND_UV
  #define CC_SURFACES_USE_TWO_SIDED USE_TWOSIDE
  #define CC_SURFACES_LIGHTING_ANISOTROPIC IS_ANISOTROPY
  #define CC_SURFACES_USE_VERTEX_COLOR USE_VERTEX_COLOR
#if IS_ANISOTROPY || USE_NORMAL_MAP
  #define CC_SURFACES_USE_TANGENT_SPACE 1
#endif
  #define CC_SURFACES_LIGHTING_ANISOTROPIC_ENVCONVOLUTION_COUNT 31
#ifndef CC_SURFACES_USE_SECOND_UV
  #define CC_SURFACES_USE_SECOND_UV 0
#endif
#ifndef CC_SURFACES_USE_TANGENT_SPACE
  #define CC_SURFACES_USE_TANGENT_SPACE 0
#endif
#ifndef CC_SURFACES_USE_VERTEX_COLOR
  #define CC_SURFACES_USE_VERTEX_COLOR 0
#endif
#ifndef CC_SURFACES_TRANSFER_LOCAL_POS
  #define CC_SURFACES_TRANSFER_LOCAL_POS 0
#endif
#ifndef CC_SURFACES_TRANSFER_CLIP_POS
  #define CC_SURFACES_TRANSFER_CLIP_POS 0
#endif
#ifndef CC_SURFACES_USE_LIGHT_MAP
  #ifdef CC_USE_LIGHTMAP
    #define CC_SURFACES_USE_LIGHT_MAP CC_USE_LIGHTMAP
  #else
    #define CC_SURFACES_USE_LIGHT_MAP 0
  #endif
#endif
#ifndef CC_SURFACES_FLIP_UV
  #define CC_SURFACES_FLIP_UV 0
#endif
#ifndef CC_SURFACES_USE_TWO_SIDED
  #define CC_SURFACES_USE_TWO_SIDED 0
#endif
#ifndef CC_SURFACES_USE_REFLECTION_DENOISE
  #define CC_SURFACES_USE_REFLECTION_DENOISE 0
#endif
#ifndef CC_SURFACES_LIGHTING_ANISOTROPIC
  #define CC_SURFACES_LIGHTING_ANISOTROPIC 0
#endif
#ifndef CC_SURFACES_LIGHTING_ANISOTROPIC_ENVCONVOLUTION_COUNT
  #define CC_SURFACES_LIGHTING_ANISOTROPIC_ENVCONVOLUTION_COUNT 0
#endif
#ifndef CC_SURFACES_USE_LEGACY_COMPATIBLE_LIGHTING
  #define CC_SURFACES_USE_LEGACY_COMPATIBLE_LIGHTING 0
#endif
#ifndef CC_SURFACES_LIGHTING_USE_FRESNEL
  #define CC_SURFACES_LIGHTING_USE_FRESNEL 0
#endif
#ifndef CC_SURFACES_LIGHTING_TRANSMIT_SPECULAR
  #define CC_SURFACES_LIGHTING_TRANSMIT_SPECULAR 0
#endif
#ifndef CC_SURFACES_LIGHTING_TRANSMIT_DIFFUSE
  #define CC_SURFACES_LIGHTING_TRANSMIT_DIFFUSE 0
#endif
#ifndef CC_SURFACES_LIGHTING_USE_SHADOWMAP_TRANSMIT
  #define CC_SURFACES_LIGHTING_USE_SHADOWMAP_TRANSMIT 0
#endif
#ifndef CC_SURFACES_LIGHTING_TRT
  #define CC_SURFACES_LIGHTING_TRT 0
#endif
#ifndef CC_SURFACES_LIGHTING_DUAL_LOBE_SPECULAR
  #define CC_SURFACES_LIGHTING_DUAL_LOBE_SPECULAR 0
#endif
#ifndef CC_SURFACES_LIGHTING_SHEEN
  #define CC_SURFACES_LIGHTING_SHEEN 0
#endif
#ifndef CC_SURFACES_LIGHTING_CLEAR_COAT
  #define CC_SURFACES_LIGHTING_CLEAR_COAT 0
#endif
#ifndef CC_SURFACES_LIGHTING_TT
  #define CC_SURFACES_LIGHTING_TT 0
#endif
#ifndef CC_SURFACES_LIGHTING_SSS
  #define CC_SURFACES_LIGHTING_SSS 0
#endif
#ifndef CC_SURFACES_LIGHTING_2ND_LAYER_SPECULAR
  #if CC_SURFACES_LIGHTING_TRT || CC_SURFACES_LIGHTING_DUAL_LOBE_SPECULAR || CC_SURFACES_LIGHTING_SHEEN || CC_SURFACES_LIGHTING_CLEAR_COAT
    #define CC_SURFACES_LIGHTING_2ND_LAYER_SPECULAR 1
  #endif
#endif
#ifndef CC_SURFACES_LIGHTING_2ND_LAYER_SPECULAR
  #define CC_SURFACES_LIGHTING_2ND_LAYER_SPECULAR 0
#endif
#ifndef CC_SURFACES_LIGHTING_USE_MULTIPLE_LAYER_BLEND
  #if CC_SURFACES_LIGHTING_CLEAR_COAT
    #define CC_SURFACES_LIGHTING_USE_MULTIPLE_LAYER_BLEND 1
  #endif
#endif
#ifndef CC_SURFACES_LIGHTING_USE_MULTIPLE_LAYER_BLEND
  #define CC_SURFACES_LIGHTING_USE_MULTIPLE_LAYER_BLEND 0
#endif
#ifndef CC_SURFACES_ENABLE_DEBUG_VIEW
  #define CC_SURFACES_ENABLE_DEBUG_VIEW 1
#endif
#define CC_USE_SURFACE_SHADER 1
#define QUATER_PI         0.78539816340
#define HALF_PI           1.57079632679
#define PI                3.14159265359
#define PI2               6.28318530718
#define PI4               12.5663706144
#define INV_QUATER_PI     1.27323954474
#define INV_HALF_PI       0.63661977237
#define INV_PI            0.31830988618
#define INV_PI2           0.15915494309
#define INV_PI4           0.07957747155
#define EPSILON           1e-6
#define EPSILON_LOWP      1e-4
#define LOG2              1.442695
#define EXP_VALUE         2.71828183
#define FP_MAX            65504.0
#define FP_SCALE          0.0009765625
#define FP_SCALE_INV      1024.0
#define GRAY_VECTOR       vec3(0.299, 0.587, 0.114)
#define LIGHT_MAP_TYPE_DISABLED 0
#define LIGHT_MAP_TYPE_ALL_IN_ONE 1
#define LIGHT_MAP_TYPE_INDIRECT_OCCLUSION 2
#define REFLECTION_PROBE_TYPE_NONE 0
#define REFLECTION_PROBE_TYPE_CUBE 1
#define REFLECTION_PROBE_TYPE_PLANAR 2
#define REFLECTION_PROBE_TYPE_BLEND 3
#define REFLECTION_PROBE_TYPE_BLEND_AND_SKYBOX 4
#define LIGHT_TYPE_DIRECTIONAL 0.0
#define LIGHT_TYPE_SPHERE 1.0
#define LIGHT_TYPE_SPOT 2.0
#define LIGHT_TYPE_POINT 3.0
#define LIGHT_TYPE_RANGED_DIRECTIONAL 4.0
#define IS_DIRECTIONAL_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_DIRECTIONAL)) < EPSILON_LOWP)
#define IS_SPHERE_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_SPHERE)) < EPSILON_LOWP)
#define IS_SPOT_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_SPOT)) < EPSILON_LOWP)
#define IS_POINT_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_POINT)) < EPSILON_LOWP)
#define IS_RANGED_DIRECTIONAL_LIGHT(light_type) (abs(float(light_type) - float(LIGHT_TYPE_RANGED_DIRECTIONAL)) < EPSILON_LOWP)
#define TONE_MAPPING_ACES 0
#define TONE_MAPPING_LINEAR 1
#define SURFACES_MAX_TRANSMIT_DEPTH_VALUE 999999.0
#ifndef CC_SURFACES_DEBUG_VIEW_SINGLE
  #define CC_SURFACES_DEBUG_VIEW_SINGLE 1
#endif
#ifndef CC_SURFACES_DEBUG_VIEW_COMPOSITE_AND_MISC
  #define CC_SURFACES_DEBUG_VIEW_COMPOSITE_AND_MISC 2
#endif
in highp vec3 v_worldPos;
in vec4 v_normal;
in vec2 v_uv;
#if CC_SURFACES_USE_VERTEX_COLOR
  in lowp vec4 v_color;
#endif
#if CC_SURFACES_USE_TANGENT_SPACE
  in mediump vec4 v_tangent;
#endif
#if CC_SURFACES_USE_SECOND_UV
  in mediump vec2 v_uv1;
#endif
#if CC_USE_LIGHTMAP && !CC_FORWARD_ADD
  in mediump vec3 v_luv;
#endif
#if CC_RECEIVE_SHADOW || CC_USE_REFLECTION_PROBE
  in mediump vec4 v_shadowBiasAndProbeId;
#endif
#if CC_USE_REFLECTION_PROBE && USE_INSTANCING
  in mediump vec4 v_reflectionProbeData;
#endif
#if CC_USE_FOG != 4 && !CC_USE_ACCURATE_FOG
  in mediump float v_fogFactor;
#endif
#if CC_SURFACES_TRANSFER_LOCAL_POS
  in highp vec4 v_localPos;
#endif
#if CC_SURFACES_TRANSFER_CLIP_POS
  in highp vec4 v_clipPos;
#endif
#if CC_USE_LIGHT_PROBE
  #if USE_INSTANCING
    in mediump vec4 v_sh_linear_const_r;
    in mediump vec4 v_sh_linear_const_g;
    in mediump vec4 v_sh_linear_const_b;
  #endif
#endif
#define FSInput_worldPos v_worldPos
#define FSInput_worldNormal v_normal.xyz
#define FSInput_faceSideSign v_normal.w
#define FSInput_texcoord v_uv
#if CC_SURFACES_USE_VERTEX_COLOR
  #define FSInput_vertexColor v_color
#else
  #define FSInput_vertexColor vec4(1.0)
#endif
#if CC_SURFACES_USE_TANGENT_SPACE
  #define FSInput_worldTangent v_tangent.xyz
  #define FSInput_mirrorNormal v_tangent.w
#else
  #define FSInput_worldTangent vec3(1.0, 1.0, 1.0)
  #define FSInput_mirrorNormal 1.0
#endif
#if CC_SURFACES_USE_SECOND_UV
  #define FSInput_texcoord1 v_uv1
#else
  #define FSInput_texcoord1 vec2(0.0, 0.0)
#endif
#if CC_USE_LIGHTMAP && !CC_FORWARD_ADD
  #define FSInput_lightMapUV v_luv
#endif
#if CC_RECEIVE_SHADOW
  #define FSInput_shadowBias v_shadowBiasAndProbeId.xy
#endif
#if CC_USE_REFLECTION_PROBE
  #define FSInput_reflectionProbeId v_shadowBiasAndProbeId.z
  #if CC_USE_REFLECTION_PROBE == REFLECTION_PROBE_TYPE_BLEND || CC_USE_REFLECTION_PROBE == REFLECTION_PROBE_TYPE_BLEND_AND_SKYBOX
    #define FSInput_reflectionProbeBlendId v_shadowBiasAndProbeId.w
  #endif
  #if USE_INSTANCING
    #define FSInput_reflectionProbeData v_reflectionProbeData
  #endif
#endif
#if CC_USE_FOG != 4 && !CC_USE_ACCURATE_FOG
  #define FSInput_fogFactor v_fogFactor
#endif
#if CC_SURFACES_TRANSFER_LOCAL_POS
  #define FSInput_localPos v_localPos
#endif
#if CC_SURFACES_TRANSFER_CLIP_POS
  #define FSInput_clipPos v_clipPos
#endif
layout(std140) uniform CCGlobal {
  highp   vec4 cc_time;
  mediump vec4 cc_screenSize;
  mediump vec4 cc_nativeSize;
  mediump vec4 cc_probeInfo;
  mediump vec4 cc_debug_view_mode;
};
layout(std140) uniform CCCamera {
  highp   mat4 cc_matView;
  highp   mat4 cc_matViewInv;
  highp   mat4 cc_matProj;
  highp   mat4 cc_matProjInv;
  highp   mat4 cc_matViewProj;
  highp   mat4 cc_matViewProjInv;
  highp   vec4 cc_cameraPos;
  mediump vec4 cc_surfaceTransform;
  mediump vec4 cc_screenScale;
  mediump vec4 cc_exposure;
  mediump vec4 cc_mainLitDir;
  mediump vec4 cc_mainLitColor;
  mediump vec4 cc_ambientSky;
  mediump vec4 cc_ambientGround;
  mediump vec4 cc_fogColor;
  mediump vec4 cc_fogBase;
  mediump vec4 cc_fogAdd;
  mediump vec4 cc_nearFar;
  mediump vec4 cc_viewPort;
};
#define CC_SURFACES_DEBUG_VIEW_VERTEX_COLOR 1
#define CC_SURFACES_DEBUG_VIEW_VERTEX_NORMAL CC_SURFACES_DEBUG_VIEW_VERTEX_COLOR + 1
#define CC_SURFACES_DEBUG_VIEW_VERTEX_TANGENT CC_SURFACES_DEBUG_VIEW_VERTEX_NORMAL + 1
#define CC_SURFACES_DEBUG_VIEW_WORLD_POS CC_SURFACES_DEBUG_VIEW_VERTEX_TANGENT + 1
#define CC_SURFACES_DEBUG_VIEW_VERTEX_MIRROR CC_SURFACES_DEBUG_VIEW_WORLD_POS + 1
#define CC_SURFACES_DEBUG_VIEW_FACE_SIDE CC_SURFACES_DEBUG_VIEW_VERTEX_MIRROR + 1
#define CC_SURFACES_DEBUG_VIEW_UV0 CC_SURFACES_DEBUG_VIEW_FACE_SIDE + 1
#define CC_SURFACES_DEBUG_VIEW_UV1 CC_SURFACES_DEBUG_VIEW_UV0 + 1
#define CC_SURFACES_DEBUG_VIEW_UVLIGHTMAP CC_SURFACES_DEBUG_VIEW_UV1 + 1
#define CC_SURFACES_DEBUG_VIEW_PROJ_DEPTH CC_SURFACES_DEBUG_VIEW_UVLIGHTMAP + 1
#define CC_SURFACES_DEBUG_VIEW_LINEAR_DEPTH CC_SURFACES_DEBUG_VIEW_PROJ_DEPTH + 1
#define CC_SURFACES_DEBUG_VIEW_FRAGMENT_NORMAL CC_SURFACES_DEBUG_VIEW_LINEAR_DEPTH + 1
#define CC_SURFACES_DEBUG_VIEW_FRAGMENT_TANGENT CC_SURFACES_DEBUG_VIEW_FRAGMENT_NORMAL + 1
#define CC_SURFACES_DEBUG_VIEW_FRAGMENT_BINORMAL CC_SURFACES_DEBUG_VIEW_FRAGMENT_TANGENT + 1
#define CC_SURFACES_DEBUG_VIEW_BASE_COLOR CC_SURFACES_DEBUG_VIEW_FRAGMENT_BINORMAL + 1
#define CC_SURFACES_DEBUG_VIEW_DIFFUSE_COLOR CC_SURFACES_DEBUG_VIEW_BASE_COLOR + 1
#define CC_SURFACES_DEBUG_VIEW_SPECULAR_COLOR CC_SURFACES_DEBUG_VIEW_DIFFUSE_COLOR + 1
#define CC_SURFACES_DEBUG_VIEW_TRANSPARENCY CC_SURFACES_DEBUG_VIEW_SPECULAR_COLOR + 1
#define CC_SURFACES_DEBUG_VIEW_METALLIC CC_SURFACES_DEBUG_VIEW_TRANSPARENCY + 1
#define CC_SURFACES_DEBUG_VIEW_ROUGHNESS CC_SURFACES_DEBUG_VIEW_METALLIC + 1
#define CC_SURFACES_DEBUG_VIEW_SPECULAR_INTENSITY CC_SURFACES_DEBUG_VIEW_ROUGHNESS + 1
#define CC_SURFACES_DEBUG_VIEW_IOR CC_SURFACES_DEBUG_VIEW_SPECULAR_INTENSITY + 1
#define CC_SURFACES_DEBUG_VIEW_DIRECT_DIFFUSE CC_SURFACES_DEBUG_VIEW_IOR + 1
#define CC_SURFACES_DEBUG_VIEW_DIRECT_SPECULAR CC_SURFACES_DEBUG_VIEW_DIRECT_DIFFUSE + 1
#define CC_SURFACES_DEBUG_VIEW_DIRECT_ALL CC_SURFACES_DEBUG_VIEW_DIRECT_SPECULAR + 1
#define CC_SURFACES_DEBUG_VIEW_ENV_DIFFUSE CC_SURFACES_DEBUG_VIEW_DIRECT_ALL + 1
#define CC_SURFACES_DEBUG_VIEW_ENV_SPECULAR CC_SURFACES_DEBUG_VIEW_ENV_DIFFUSE + 1
#define CC_SURFACES_DEBUG_VIEW_ENV_ALL CC_SURFACES_DEBUG_VIEW_ENV_SPECULAR + 1
#define CC_SURFACES_DEBUG_VIEW_EMISSIVE CC_SURFACES_DEBUG_VIEW_ENV_ALL + 1
#define CC_SURFACES_DEBUG_VIEW_LIGHT_MAP CC_SURFACES_DEBUG_VIEW_EMISSIVE + 1
#define CC_SURFACES_DEBUG_VIEW_SHADOW CC_SURFACES_DEBUG_VIEW_LIGHT_MAP + 1
#define CC_SURFACES_DEBUG_VIEW_AO CC_SURFACES_DEBUG_VIEW_SHADOW + 1
#define CC_SURFACES_DEBUG_VIEW_FRESNEL CC_SURFACES_DEBUG_VIEW_AO + 1
#define CC_SURFACES_DEBUG_VIEW_TRANSMIT_DIRECT_DIFFUSE CC_SURFACES_DEBUG_VIEW_FRESNEL + 1
#define CC_SURFACES_DEBUG_VIEW_TRANSMIT_DIRECT_SPECULAR CC_SURFACES_DEBUG_VIEW_TRANSMIT_DIRECT_DIFFUSE + 1
#define CC_SURFACES_DEBUG_VIEW_TRANSMIT_ENV_DIFFUSE CC_SURFACES_DEBUG_VIEW_TRANSMIT_DIRECT_SPECULAR + 1
#define CC_SURFACES_DEBUG_VIEW_TRANSMIT_ENV_SPECULAR CC_SURFACES_DEBUG_VIEW_TRANSMIT_ENV_DIFFUSE + 1
#define CC_SURFACES_DEBUG_VIEW_TRANSMIT_ALL CC_SURFACES_DEBUG_VIEW_TRANSMIT_ENV_SPECULAR + 1
#define CC_SURFACES_DEBUG_VIEW_DIRECT_2ND_SPECULAR CC_SURFACES_DEBUG_VIEW_TRANSMIT_ALL + 1
#define CC_SURFACES_DEBUG_VIEW_ENVIRONMENT_2ND_SPECULAR CC_SURFACES_DEBUG_VIEW_DIRECT_2ND_SPECULAR + 1
#define CC_SURFACES_DEBUG_VIEW_2ND_SPECULAR_ALL CC_SURFACES_DEBUG_VIEW_ENVIRONMENT_2ND_SPECULAR + 1
#define CC_SURFACES_DEBUG_VIEW_FOG CC_SURFACES_DEBUG_VIEW_2ND_SPECULAR_ALL + 1
#define IS_DEBUG_VIEW_ENABLE_WITH_CAMERA (cc_surfaceTransform.y != 3.0)
#define IS_DEBUG_VIEW_LIGHTING_ENABLE_WITH_ALBEDO (UnpackBitFromFloat(cc_debug_view_mode.w, 6) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_MISC_ENABLE_CSM_LAYER_COLORATION (UnpackBitFromFloat(cc_debug_view_mode.w, 7) && IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_DIRECT_DIFFUSE (UnpackBitFromFloat(cc_debug_view_mode.y, 0) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_DIRECT_SPECULAR (UnpackBitFromFloat(cc_debug_view_mode.y, 1) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_ENV_DIFFUSE (UnpackBitFromFloat(cc_debug_view_mode.y, 2) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_ENV_SPECULAR (UnpackBitFromFloat(cc_debug_view_mode.y, 3) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_EMISSIVE (UnpackBitFromFloat(cc_debug_view_mode.y, 4) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_LIGHT_MAP (UnpackBitFromFloat(cc_debug_view_mode.y, 5) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_SHADOW (UnpackBitFromFloat(cc_debug_view_mode.y, 6) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_AO (UnpackBitFromFloat(cc_debug_view_mode.y, 7) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_NORMAL_MAP (UnpackBitFromFloat(cc_debug_view_mode.z, 0) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_FOG (UnpackBitFromFloat(cc_debug_view_mode.z, 1) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_TONE_MAPPING (UnpackBitFromFloat(cc_debug_view_mode.z, 2) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_GAMMA_CORRECTION (UnpackBitFromFloat(cc_debug_view_mode.z, 3) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_FRESNEL (UnpackBitFromFloat(cc_debug_view_mode.z, 4) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_TRANSMIT_DIFFUSE (UnpackBitFromFloat(cc_debug_view_mode.z, 5) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_TRANSMIT_SPECULAR (UnpackBitFromFloat(cc_debug_view_mode.z, 6) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_2ND_SPECULAR (UnpackBitFromFloat(cc_debug_view_mode.z, 7) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#define IS_DEBUG_VIEW_COMPOSITE_ENABLE_TT (UnpackBitFromFloat(cc_debug_view_mode.w, 0) || !IS_DEBUG_VIEW_ENABLE_WITH_CAMERA)
#if (CC_PIPELINE_TYPE == 0 || CC_FORCE_FORWARD_SHADING)
  #if CC_FORWARD_ADD
    #if CC_PIPELINE_TYPE == 0
      #define LIGHTS_PER_PASS 1
    #else
      #define LIGHTS_PER_PASS 10
    #endif
    #if CC_ENABLE_CLUSTERED_LIGHT_CULLING == 0
    layout(std140) uniform CCForwardLight {
      highp vec4 cc_lightPos[LIGHTS_PER_PASS];
      vec4 cc_lightColor[LIGHTS_PER_PASS];
      vec4 cc_lightSizeRangeAngle[LIGHTS_PER_PASS];
      vec4 cc_lightDir[LIGHTS_PER_PASS];
      vec4 cc_lightBoundingSizeVS[LIGHTS_PER_PASS];
    };
    #endif
  #endif
#endif
#if CC_USE_LIGHT_PROBE
  #if !USE_INSTANCING
    layout(std140) uniform CCSH {
      vec4 cc_sh_linear_const_r;
      vec4 cc_sh_linear_const_g;
      vec4 cc_sh_linear_const_b;
      vec4 cc_sh_quadratic_r;
      vec4 cc_sh_quadratic_g;
      vec4 cc_sh_quadratic_b;
      vec4 cc_sh_quadratic_a;
    };
  #endif
#endif
layout(std140) uniform CCShadow {
  highp mat4 cc_matLightView;
  highp mat4 cc_matLightViewProj;
  highp vec4 cc_shadowInvProjDepthInfo;
  highp vec4 cc_shadowProjDepthInfo;
  highp vec4 cc_shadowProjInfo;
  mediump vec4 cc_shadowNFLSInfo;
  mediump vec4 cc_shadowWHPBInfo;
  mediump vec4 cc_shadowLPNNInfo;
  lowp vec4 cc_shadowColor;
  mediump vec4 cc_planarNDInfo;
};
#if CC_SUPPORT_CASCADED_SHADOW_MAP
  layout(std140) uniform CCCSM {
    highp vec4 cc_csmViewDir0[4];
    highp vec4 cc_csmViewDir1[4];
    highp vec4 cc_csmViewDir2[4];
    highp vec4 cc_csmAtlas[4];
    highp mat4 cc_matCSMViewProj[4];
    highp vec4 cc_csmProjDepthInfo[4];
    highp vec4 cc_csmProjInfo[4];
    highp vec4 cc_csmSplitsInfo;
  };
#endif
uniform samplerCube cc_environment;
#if CC_USE_IBL
  #if CC_USE_DIFFUSEMAP
    uniform samplerCube cc_diffuseMap;
  #endif
#endif
#if CC_USE_REFLECTION_PROBE
  uniform samplerCube cc_reflectionProbeCubemap;
  uniform sampler2D cc_reflectionProbePlanarMap;
  uniform sampler2D cc_reflectionProbeDataMap;
  uniform samplerCube cc_reflectionProbeBlendCubemap;
#endif
vec4 packDepthToRGBA (float depth) {
  vec4 ret = vec4(1.0, 255.0, 65025.0, 16581375.0) * depth;
  ret = fract(ret);
  ret -= vec4(ret.yzw, 0.0) / 255.0;
  return ret;
}
#define UnpackBitFromFloat(value, bit) (mod(floor(value / pow(10.0, float(bit))), 10.0) > 0.0)
#if defined(CC_USE_METAL) || defined(CC_USE_WGPU)
#define CC_HANDLE_SAMPLE_NDC_FLIP_STATIC(y) y = -y
#else
#define CC_HANDLE_SAMPLE_NDC_FLIP_STATIC(y)
#endif
float GetLinearDepthFromViewSpace(vec3 viewPos, float near, float far) {
  float dist = length(viewPos);
  return (dist - near) / (far - near);
}
#if CC_SUPPORT_CASCADED_SHADOW_MAP
#endif
float CCGetLinearDepth(vec3 worldPos, float viewSpaceBias) {
\tvec4 viewPos = cc_matLightView * vec4(worldPos.xyz, 1.0);
  viewPos.z += viewSpaceBias;
\treturn GetLinearDepthFromViewSpace(viewPos.xyz, cc_shadowNFLSInfo.x, cc_shadowNFLSInfo.y);
}
float CCGetLinearDepth(vec3 worldPos) {
\treturn CCGetLinearDepth(worldPos, 0.0);
}
#if CC_RECEIVE_SHADOW
  uniform highp sampler2D cc_shadowMap;
  uniform highp sampler2D cc_spotShadowMap;
  #if CC_SUPPORT_CASCADED_SHADOW_MAP
  #else
  #endif
#endif
#if CC_USE_FOG != 4
#endif
#if CC_USE_LIGHT_PROBE
  #if CC_USE_LIGHT_PROBE
  #endif
#endif
#if CC_USE_REFLECTION_PROBE
  layout(std140) uniform CCLocal {
    highp mat4 cc_matWorld;
    highp mat4 cc_matWorldIT;
    highp vec4 cc_lightingMapUVParam;
    highp vec4 cc_localShadowBias;
    highp vec4 cc_reflectionProbeData1;
    highp vec4 cc_reflectionProbeData2;
    highp vec4 cc_reflectionProbeBlendData1;
    highp vec4 cc_reflectionProbeBlendData2;
  };
#endif
#if CC_USE_LIGHTMAP && !CC_FORWARD_ADD
  uniform sampler2D cc_lightingMap;
#endif
layout(std140) uniform Constants {
  vec4 tilingOffset;
  vec4 albedo;
  vec4 albedoScaleAndCutoff;
  vec4 pbrParams;
  vec4 emissive;
  vec4 emissiveScaleParam;
  vec4 anisotropyParam;
};
#if USE_ALBEDO_MAP
  uniform sampler2D albedoMap;
#endif
#if USE_NORMAL_MAP
  uniform sampler2D normalMap;
#endif
#if USE_PBR_MAP
  uniform sampler2D pbrMap;
#endif
#if USE_OCCLUSION_MAP
  uniform sampler2D occlusionMap;
#endif
#if USE_EMISSIVE_MAP
  uniform sampler2D emissiveMap;
#endif
#if IS_ANISOTROPY && USE_ANISOTROPY_MAP
  uniform sampler2D anisotropyMap;
  uniform sampler2D anisotropyMapNearestFilter;
#endif
#if USE_ALPHA_TEST
#endif
#define CC_SURFACES_FRAGMENT_MODIFY_BASECOLOR_AND_TRANSPARENCY
#define CC_SURFACES_FRAGMENT_ALPHA_CLIP_ONLY
void SurfacesFragmentAlphaClipOnly()
{
  #if USE_ALPHA_TEST
    float alpha = albedo.ALPHA_TEST_CHANNEL;
    #if USE_VERTEX_COLOR
      alpha *= FSInput_vertexColor.a;
    #endif
    #if USE_ALBEDO_MAP
      alpha = texture(albedoMap, ALBEDO_UV).ALPHA_TEST_CHANNEL;
    #endif
    if (alpha < albedoScaleAndCutoff.w) discard;
  #endif
}
#define CC_SURFACES_FRAGMENT_MODIFY_WORLD_NORMAL
#define CC_SURFACES_FRAGMENT_MODIFY_ANISOTROPY_PARAMS
#define CC_SURFACES_FRAGMENT_MODIFY_EMISSIVE
#define CC_SURFACES_FRAGMENT_MODIFY_PBRPARAMS
in highp vec2 v_clip_depth;
layout(location = 0) out vec4 fragColorX;
void main () {
#ifdef CC_SURFACES_FRAGMENT_ALPHA_CLIP_ONLY
  SurfacesFragmentAlphaClipOnly();
#endif
  highp float clipDepth = v_clip_depth.x / v_clip_depth.y * 0.5 + 0.5;
  #if CC_SHADOWMAP_USE_LINEAR_DEPTH
    if (IS_SPOT_LIGHT(cc_shadowLPNNInfo.x)) {
      clipDepth = CCGetLinearDepth(FSInput_worldPos.xyz);
    }
  #endif
  #if CC_SHADOWMAP_FORMAT == 1
    fragColorX = packDepthToRGBA(clipDepth);
  #else
    fragColorX = vec4(clipDepth, 1.0, 1.0, 1.0);
  #endif
}`;


function createProgram(vshader, fshader) {
    var vertexShader = loadShader(gl.VERTEX_SHADER, vshader);
    var fragmentShader = loadShader(gl.FRAGMENT_SHADER, fshader);
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        var error = gl.getProgramInfoLog(program);
        console.log('Failed to link program: ' + error);
        gl.deleteProgram(program);
        program = null;
    }
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return program;
}

function loadShader(type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var error = gl.getShaderInfoLog(shader);
        console.log('Failed to compile shader: ' + error);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

var canvas = wx.createCanvas();
let gl = canvas.getContext("webgl2");
let program = createProgram(vertexShaderSource0, fragmentShaderSource0);
let num = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
console.log(`attributes should be 3, actual is ${num}`);