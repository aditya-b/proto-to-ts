
# Generate Typescript files for Protos

This project generates typescript files for proto files. This uses `protoc` and `ts-proto` to generate typescript files from a proto file.




## Usage

- Install protoc from https://github.com/protocolbuffers/protobuf/releases
- Extract it to a folder : `protobuf`
- Move `proto.sh` from `protobuf/bin` to your `$PATH` (`/usr/local/bin`)

- Download this node project
- Run `npm install`
- Give necessary execution permissions
- Move the protos to `/protos` folder
- Run the command `./generate-ts.sh <PROT_FILE_NAME_WITHOUT_EXTENSION>`
- The typescript file is generated in `/types` folder


## Support

For support, email aditya.bulusu168@gmail.com.

References: 
- https://blog.mechanicalrock.io/2022/04/08/getting-started-with-protobufs-and-typescript.html#de-serialise-the-message

- https://github.com/stephenh/ts-proto