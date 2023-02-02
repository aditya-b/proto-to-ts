protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
       --ts_proto_out=./types \
       --ts_proto_opt=onlyTypes=true \
       --ts_proto_opt=stringEnums=true \
       --ts_proto_opt=useSnakeTypeName=false \
       --ts_proto_opt=useMapType=true \
       ./protos/$1.proto