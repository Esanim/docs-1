---
sidebar_label: 'LSP3 - Universal Profile - Metadata'
sidebar_position: 4
---

# LSP3 - Universal Profile Metadata

:::info Standard Document

[LSP3 - Universal Profile Metadata](https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-3-UniversalProfile-Metadata.md)

:::

## Introduction

The implementation of the **[LSP0-ERC725Account](./01-lsp0-erc725account.md)** standard does not contain any metadata describing the account.

**LSP3-UniversalProfile-Metadata** is a Metadata standard that defines specific keys to describe a Universal Profile. A Universal Profile combines **LSP0-ERC725Account**, an interface for a smart contract-based account, and **LSP3-UniversalProfile-Metadata**, a set of predefined ERC725Y keys to describe the profile.

## ERC725Y Keys

### `SupportedStandards:LSP3UniversalProfile`

```json
{
  "name": "SupportedStandards:LSP3UniversalProfile",
  "key": "0xeafec4d89fa9619884b6b89135626455000000000000000000000000abe425d6",
  "keyType": "Mapping",
  "valueType": "bytes4",
  "valueContent": "0xabe425d6"
}
```

This key is used to know if the contract represents a **Universal Profile**.

### `LSP3Profile`

```json
{
  "name": "LSP3Profile",
  "key": "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",
  "keyType": "Singleton",
  "valueType": "bytes",
  "valueContent": "JSONURL"
}
```

The value attached to this key is a JSONURL. It represents a reference to a JSON file that describes the **Universal Profile**. The file can be stored on a centralised or decentralised storage.

Inside the JSON file, the keys `profileImage` and `backgroundImage` can accept an array of images, each defining an image with different dimensions (width + height). This is useful for client interfaces to download and serve the images with the most suitable dimensions instead of re-scale them.

### LSP3IssuedAssets

**Universal Profiles** can create digital assets, such as tokens and NFTs. Every assets (tokens and NFTs) created should be registered in the `LSP3IssuedAssets[]` Array.

The `LSP3IssuedAssetsMap:<address>` can then be used to know the asset type (_e.g: an LSP7 token or an LSP8 NFT_), by extracting the `bytes4` ERC165 interface id of the asset contract. This `bytes4` value can be extracted from the value retrieved, starting at the 8th byte (index 7).

```json
{
  "name": "LSP3IssuedAssets[]",
  "key": "0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0",
  "keyType": "Array",
  "valueContent": "Address",
  "valueType": "address"
}
```

```json
{
  "name": "LSP3IssuedAssetsMap:<address>",
  "key": "0x83f5e77bfb14241600000000<address>",
  "keyType": "Mapping",
  "valueType": "bytes",
  "valueContent": "Mixed"
}
```

### LSP5ReceivedAssets

:::info

See the [LSP5 - Received Assets](./06-lsp5-received-assets.md) standard page for more information.

:::

```json
{
  "name": "LSP5ReceivedAssets[]",
  "key": "0x6460ee3c0aac563ccbf76d6e1d07bada78e3a9514e6382b736ed3f478ab7b90b",
  "keyType": "Array",
  "valueType": "address",
  "valueContent": "Address"
}
```

If the Universal Profile is used with the **[LSP6-KeyManager](./04-lsp6-key-manager.md)** and **[LSP1-UniversalReceiverDelegate](./02-lsp1-universal-receiver-delegate.md)**, the received assets will be automatically registered in the storage. To know how many different assets you have, you can query this key.